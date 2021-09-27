import { IResponseMessage } from './../settings/services/api';
import api from "../settings/services/api";
import { GetDashboardResponse } from "./@types/financeTypes";

export class FinanceService {

	static async GetDashboardAmount(): Promise<GetDashboardResponse> {

		const { data } = await api.get<IResponseMessage<GetDashboardResponse>>('finance/stores/bill')

		return data.message
	}

}
