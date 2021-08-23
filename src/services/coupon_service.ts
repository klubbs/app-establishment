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
		const { data } = await api.get<IResponseMessage<ICheckoutTransactionsRequest[]>>('checkout')

		return data.message
	}
}

class CouponValidator extends Validator<ICoupon> {
	constructor() {
		super()

		this.ruleFor('description').notEmpty().maxLength(250)

		this.ruleFor('offPercentual').must((item) => {
			return item > 1
		})
	}
}
