import { connectionHandler, IResponseMessage } from '../settings/connection';
import { GetDashboardResponse } from "./@types/@finance-service";

export class FinanceService {

	static async GetDashboardBalance(): Promise<GetDashboardResponse> {

		const { data } = await connectionHandler('KLUBBS_API_URL')
			.get<IResponseMessage<GetDashboardResponse>>('finance/stores/available')

		return data.message
	}

	static async RequestBalance(balance: string): Promise<void> {
		await connectionHandler('KLUBBS_API_URL')
			.post('finance/stores/balance', null, { params: { balance: balance } })
	}

}
