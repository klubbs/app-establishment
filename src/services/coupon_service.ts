import { Flash } from './../utils/flash';
import { IError } from './../settings/services/api';
import { ICheckoutTransactionsRequest, ICoupon, ICouponRequest } from './interfaces/icoupon'
import { Validator } from 'fluentvalidation-ts'
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors'
import api, { IResponseMessage } from '../settings/services/api'

export class CouponService {

	static validate(params: ICoupon): ValidationErrors<ICoupon> {
		const validator = new CouponValidator()

		return validator.validate(params)
	}

	static async createCoupon(params: ICoupon): Promise<string> {

		const contract = this.contractCreateCoupon(params)

		const { data } = await api.post<IResponseMessage<string>>('stores/coupon/create', contract)

		return data.message;
	}

	static contractCreateCoupon(params: ICoupon): ICouponRequest {

		return {
			description: params.description,
			off_percentual: params.offPercentual,
			valid_at: params.validAt.ToUnixEpoch()
		}

	}

	static catchCreateCoupon(errors: IError) {

		if (errors.statusCode === 412) {
			Flash.permissionCreateManyCoupons()
		} else {
			Flash.someoneBullshit()
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
						"Seu estabelecimento não faz parte da carteira deste código de influenciador",
						'WARNING')
					break;

				case 'coupon disabled':
					Flash.customMessage(
						"Cupom vencido ou desabilitado pelo estabelecimento",
						"Este cupom não é mais válido",
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

class CouponValidator extends Validator<ICoupon> {
	constructor() {
		super()

		this.ruleFor('description').notEmpty().maxLength(250)

		this.ruleFor('offPercentual').must((item) => {
			return item >= 5
		})
	}
}
