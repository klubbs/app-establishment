import { Flash } from "../utils/flash";
import { connectionHandler, IError } from "../settings/connection";
import { IGetStoreOffers, IOffer, IOfferRequest } from "./@types/@offer-service";
import { Validator } from "fluentvalidation-ts";
import { ValidationErrors } from "fluentvalidation-ts/dist/ValidationErrors";
import { IResponseMessage } from "../settings/connection";

export class OfferService {
	static validate(params: IOffer): ValidationErrors<IOffer> {
		const validator = new OfferValidator();

		return validator.validate(params);
	}

	static async createOffer(params: IOffer): Promise<string> {
		const contract = this.contractCreateOffer(params);

		const { data } = await connectionHandler("KLUBBS_API_URL").post<
			IResponseMessage<string>
		>("stores/offers/create", contract);

		return data.message;
	}

	static async disableOffer(offerId: string): Promise<void> {
		await connectionHandler('KLUBBS_API_URL').put("stores/offers/disable", {
			offer_id: offerId
		})

	}

	static contractCreateOffer(params: IOffer): IOfferRequest {
		params.validAt.setHours(12);

		return {
			description: params.description,
			off_percentual: params.offPercentual,
			valid_at: params.validAt.ToUnixEpoch(),
			working_days: params.workingDays,
			minimum_ticket: Number(
				params.minimumTicket.replaceAll(".", "").replaceAll(",", ".")
			),
		};
	}

	static async getStoreOffers(): Promise<IGetStoreOffers[]> {
		const { data } = await connectionHandler("KLUBBS_API_URL").get<
			IResponseMessage<IGetStoreOffers[]>
		>("stores/offers");

		return data.message
	}

	static catchCreateOffer(errors: IError) {
		if (errors) {
			if (errors.statusCode === 412) {
				Flash.customMessage("Antes deve definir o meio de pagamento", "Defina um cartão de crédito", "WARNING");
			} else {
				Flash.someoneBullshit();
			}
		}
	}

	static async scanCoupon(checkoutId: string, storeAmount: string) {
		const { data } = await connectionHandler("KLUBBS_API_URL").put<
			IResponseMessage<{ discountAmount: number; checkoutAmount: number }>
		>("checkouts", {
			checkout_id: checkoutId,
			store_checkout_amount: storeAmount,
		});

		return data.message;
	}

	static catchScanCoupon(errors: IError) {
		if (errors.statusCode === 412) {
			const actualError = errors.error[0].field.toLowerCase();

			switch (actualError) {
				case "checkout completed":
					Flash.customMessage(
						"Esse checkout já foi concluido",
						"Checkout já concluido",
						"NEUTRAL"
					);
					break;

				case "responsible checkout":
					Flash.customMessage(
						"Checkout em andamento é de outro estabelecimento",
						"Não responsável pelo checkout",
						"WARNING"
					);
					break;

				case "range amount":
					Flash.customMessage(
						"O valor informado entre vocês está muito incosistente",
						"Valor informado é inconsistente",
						"NEUTRAL"
					);
					break;

				case "store permission":
					Flash.customMessage(
						"Seu estabelecimento ainda não esta adequado a fazer checkouts",
						"Establecimento rejeitado",
						"WARNING"
					);
					break;

				case "balance":
					Flash.customMessage(
						"Saldo insuficiente para esse checkout",
						"Sem saldo",
						"NEUTRAL"
					);
					break;

				case "payment method":
					Flash.customMessage(
						"Cadastre um método de pagamento antes",
						"Método de pagamento",
						"WARNING"
					);
					break;

				default:
					break;
			}
		} else {
			Flash.someoneBullshit();
		}
	}
}

class OfferValidator extends Validator<IOffer> {
	constructor() {
		super();

		this.ruleFor("workingDays").must((item, model) => {
			if (model.offPercentual === 5) {
				return model.workingDays.length === 7;
			}

			return item.length > 0;
		});

		this.ruleFor("offPercentual").must((item) => {
			return item >= 5;
		});

		//TODO VAlidar numeros da semana com must()
	}
}
