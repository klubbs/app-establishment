import { Flash } from '../utils/flash';
import { IError } from '../settings/services/api';
import { ICheckoutTransactionsRequest, IOffer, IOfferRequest } from './@types/OfferTypes'
import { Validator } from 'fluentvalidation-ts'
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors'
import api, { IResponseMessage } from '../settings/services/api'

export class OfferService {

	static validate(params: IOffer): ValidationErrors<IOffer> {
		const validator = new OfferValidator()

		return validator.validate(params)
	}

	static async createOffer(params: IOffer): Promise<string> {

		const contract = this.contractCreateOffer(params)

		const { data } = await api.post<IResponseMessage<string>>('stores/coupon/create', contract)

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

	static async getCheckoutTransactions(): Promise<ICheckoutTransactionsRequest[]> {
		const { data } = await api
			.get<IResponseMessage<ICheckoutTransactionsRequest[]>>('checkouts/stores')

		return data.message
	}

	static async scanCoupon(couponId: string, userId: string) {
		await api.post('checkouts', { coupon_id: couponId, user_id: userId })
	}

	static catchScanCoupon(errors: IError) {

		if (errors.statusCode === 412) {
			const actualError = errors.error[0].field.toLowerCase();

			switch (actualError) {
				case 'coupon':
					Flash.customMessage("Cupom inválido", "Esse não é um cupom válido", 'WARNING')
					break;

				case 'wallet':
					Flash.customMessage(
						"Cupom não está na carteira",
						"O cliente não adicionou o cupom a carteira", 'WARNING')
					break;

				case 'ineligible':
					Flash.customMessage(
						"Este cupom não é válido no seu estabelecimento",
						"Não existe oferta do seu estabelecimento neste cupom",
						'WARNING')
					break;

				case 'rules':
					Flash.customMessage(
						"Oferta Inválida",
						"Esta oferta não é válida hoje",
						'WARNING')

					break;

				case 'establishment':
					Flash.customMessage(
						"Seu estabelecimento ainda não esta adequado a fazer checkouts",
						"Establecimento rejeitado",
						'WARNING')

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
