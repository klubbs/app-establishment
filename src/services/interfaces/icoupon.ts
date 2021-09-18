export interface ICoupon {
	description: string
	offPercentual: number
	validAt: Date
}

export interface ICouponRequest {
	description: string
	off_percentual: number
	valid_at: number
}

export interface ICheckoutTransactionsRequest {
	id: string;
	code: string;
	influencer_name: string
	created_at: number;
	amount: number;
}
