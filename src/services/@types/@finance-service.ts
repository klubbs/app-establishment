import { ITransactionItems } from "../../components/component-heavy/transactions/interfaces"

export type GetDashboardResponse = {
	store_id: string,
	payment_link: string,
	wallet_amount: number,
	next_checkout_percentage: number
	checkouts: ITransactionItems[]
}
