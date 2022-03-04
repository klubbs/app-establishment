import { IResponseMessage } from './../settings/services/api';
import api from "../settings/services/api";
import { GetDashboardResponse } from "./@types/financeTypes";

export class FinanceService {

	static async GetDashboardBalance(): Promise<GetDashboardResponse> {

		const { data } = await api
			.get<IResponseMessage<GetDashboardResponse>>('finance/stores/available')

		return data.message
	}

	static async RequestBalance(balance: string): Promise<void> {
		await api.post('finance/stores/balance', null, { params: { balance: balance } })
	}

}
