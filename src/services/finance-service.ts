import { connectionHandler, IError, IResponseMessage } from '../settings/connection';
import { Flash } from '../utils/flash';
import { GetDashboardResponse, GetPaymentMethodResponse } from "./@types/@finance-service";

export class FinanceService {

	static async GetDashboardBalance(): Promise<GetDashboardResponse> {

		const { data } = await connectionHandler('KLUBBS_API_URL')
			.get<IResponseMessage<GetDashboardResponse>>('finance/stores/available')

		return data.message
	}


	static async GetPaymentMethod(): Promise<GetPaymentMethodResponse> {
		const { data } = await connectionHandler('KLUBBS_API_URL').get<IResponseMessage<GetPaymentMethodResponse>>('finance/stores/payments')

		return data.message
	}

	static async UpdatePaymentMethod({ cardNumber, holderName, cvv, exp_month, exp_year }: { cardNumber: string, holderName: string, cvv: string, exp_month: string, exp_year: string }) {

		await connectionHandler('KLUBBS_API_URL').put('finance/stores/payments', {
			card_number: cardNumber,
			card_holder_name: holderName,
			cvv: cvv,
			expire_month: exp_month,
			expire_year: exp_year
		})
	}


	static catchGetPaymentMethod(errors: IError) {
		if (errors) {
			if (errors.statusCode === 412) {
				Flash.customMessage('Entre em contato com o nosso atendimento', 'Estabelecimento não habilitado para pagamentos !', 'WARNING');
			} else {
				Flash.someoneBullshit();
			}
		}
	}

	static catchUpdatePaymentMethod(errors: IError) {
		if (errors) {
			if (errors.statusCode == 422) {
				const firstError = errors.error[0].field

				const ableErrors: any = {
					"card number": "O número do cartão é inválido",
					"card expiration": "Data de expiração inválida"
				}

				Flash.customMessage(ableErrors[firstError], 'Dados inválidos !', 'WARNING');
			}

			if (errors.statusCode == 412) {
				Flash.customMessage('Seus documentos estão inválidos', 'Documentos inválidos', 'WARNING');
			}
		}
	}


	/**
	 *
	 * @deprecated
	 */
	static async RequestBalance(balance: string): Promise<void> {
		await connectionHandler('KLUBBS_API_URL')
			.post('finance/stores/balance', null, { params: { balance: balance } })
	}

}
