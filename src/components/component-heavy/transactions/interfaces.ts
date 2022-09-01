export interface ITransactionItems {
	id: string,
	coupon_code: string,
	partner_coupon_name: string,
	checkouted_at: number,
	pre_checkouted_at: number,
	checkout_amount: number,
	user_informed_amount: number,
	store_informed_amount: number
}
