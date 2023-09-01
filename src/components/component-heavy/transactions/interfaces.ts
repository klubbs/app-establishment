export interface ITransactionItems {
	id: string,
	coupon_code: string,
	partner_coupon_name: string,
	checkout_at: number,
	checkin_at: number,
	checkout_amount: number,
	user_informed_amount: number,
	store_informed_amount: number,
	discount: number
}
