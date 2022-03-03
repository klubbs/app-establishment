export type GetDashboardResponse = {
	store_id: string,
	payment_link: string,
	amount: number,
	checkout_in_future: boolean,
	checkouts: {
		id: string,
		code: string,
		influencer_name: string,
		created_at: number,
		amount: number
	}[]
}
