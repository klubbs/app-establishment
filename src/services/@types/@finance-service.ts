import { ITransactionItems } from "../../components/component-heavy/transactions/interfaces"

export type GetDashboardResponse = {
	store_id: string,
	checkouts_amount: number,
	checkouts: ITransactionItems[]
}
