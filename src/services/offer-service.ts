import { Flash } from '../utils/flash';
import { connectionHandler, IError } from '../settings/connection';
import { IOffer, IOfferRequest } from './@types/@offer-service'
import { Validator } from 'fluentvalidation-ts'
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors'
import { IResponseMessage } from '../settings/connection'

export class OfferService {

	static validate(params: IOffer): ValidationErrors<IOffer> {
		const validator = new OfferValidator()

		return validator.validate(params)
	}

	static async createOffer(params: IOffer): Promise<string> {

		const contract = this.contractCreateOffer(params)

		const { data } = await connectionHandler('KLUBBS_API_URL')
			.post<IResponseMessage<string>>('stores/coupon/create', contract)

		return data.message;
	}

	static contractCreateOffer(params: IOffer): IOfferRequest {
		params.validAt.setHours(12)

		return {
			description: params.description,
			off_percentual: params.offPercentual,
			valid_at: params.validAt.ToUnixEpoch(),
			working_days: params.workingDays,
			minimum_ticket: Number(params.minimumTicket.replace(",", "."))
		}

	}

	static catchCreateOffer(errors: IError) {
		if (errors) {
			if (errors.statusCode === 412) {
				Flash.permissionCreateManyOffers()
			} else {
				Flash.someoneBullshit()
			}
		}
	}

	static async scanCoupon(checkoutId: string, storeAmount: string) {
		await connectionHandler('KLUBBS_API_URL')
			.post('checkouts', { checkout_id: checkoutId, store_checkout_amount: storeAmount })
	}

	static catchScanCoupon(errors: IError) {

		if (errors.statusCode === 412) {
			const actualError = errors.error[0].field.toLowerCase();

			switch (actualError) {
				case 'checkout completed':
					Flash.customMessage(
						"Esse checkout já foi validado",
						"Checkout já validado",
						'NEUTRAL'
					)
					break;

				case 'responsible checkout':
					Flash.customMessage(
						'Checkout em andamento é de outro estabelecimento',
						"Não responsável pelo checkout",
						'WARNING'
					)
					break;

				case 'range amount':
					Flash.customMessage(
						"O valor informado entre vocês está muito incosistente",
						"Valor informado é inconsistente",
						'NEUTRAL'
					)
					break;

				case 'store permission':
					Flash.customMessage(
						"Seu estabelecimento ainda não esta adequado a fazer checkouts",
						"Establecimento rejeitado",
						'WARNING'
					)
					break;

				case 'balance':
					Flash.customMessage(
						"O saldo é inválido para completar este checkout",
						"Saldo inválido",
						'NEUTRAL'
					)
					break;

				default:

					break;
			}

		} else {
			Flash.someoneBullshit()
		}
	}
}

class OfferValidator extends Validator<IOffer> {
	constructor() {
		super()

		this.ruleFor('workingDays').must((item) => {
			return item.length > 0
		})

		this.ruleFor('offPercentual').must((item) => {
			return item >= 5
		})

		//TODO VAlidar numeros da semana com must()
	}
}
