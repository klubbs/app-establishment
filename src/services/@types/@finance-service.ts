import { ITransactionItems } from "../../components/component-heavy/transactions/interfaces"

export type GetDashboardResponse = {
	store_id: string,
	checkouts_amount: number,
	checkouts: ITransactionItems[]
}

export type GetPaymentMethodResponse = {
	store_id: string,
	last_4: number
	exp_year: number;
	exp_month: number
}
