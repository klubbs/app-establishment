import React, { useEffect, useState, useContext } from 'react';
import { RefreshControl } from 'react-native'
import { Skeleton } from '@motify/skeleton'
import { MotiView } from 'moti'
import { ValueSubtitle, Wrapper, Amount, DueDateSubtitle, WrapperAmount, PayButton, BlurBox } from './styles';
import { FinanceService } from '../../../services/financeService';
import { Flash } from '../../../utils/flash';
import colors from '../../../../assets/constants/colors';
import { AuthContext } from '../../../contexts/auth_context';
import { isAPIException } from '../../../utils/documents_utils';
import { Middlewares } from '../../../utils/middlewares';

export const DashboardAmount: React.FC = () => {

	const { reloadProfileInCloud } = useContext(AuthContext)

	const [amount, setAmount] = useState(0.00)
	const [showSkeleton, setShowSkeleton] = useState(true)
	const [refreshing, setRefreshing] = useState(true)


	useEffect(() => {
		getDashboardAmount()
	}, [])

	async function getDashboardAmount() {

		try {
			setRefreshing(true)
			setShowSkeleton(true)

			await reloadProfileInCloud()

			const response = await FinanceService.GetDashboardAmount();

			setAmount(response.amount)

		} catch (error) {
			Middlewares.middlewareError(
				() => Flash
					.customMessage("Ocorreu um erro ao recuperar seu painel", "Desculpe", "NEUTRAL"),
				error
			)

		} finally {
			setShowSkeleton(false)
			setRefreshing(false)
		}

	}

	return (
		<Wrapper
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={getDashboardAmount}
					tintColor={colors.COLOR_WHITE}
					colors={[colors.COLOR_WHITE]}
				/>
			}
		>
			<ValueSubtitle>Débito acumulado</ValueSubtitle>
			<WrapperAmount>
				<MotiView>
					<Skeleton show={showSkeleton} colorMode={'light'}>
						<Amount>{
							amount
								.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
						</Amount>
					</Skeleton>
				</MotiView>
				{
					amount > 0 &&
					<DueDateSubtitle>
						{`${new Date().RemmaningDaysInMonth()}`} dias para o vencimento
					</DueDateSubtitle>
				}
				{amount <= 0 && <DueDateSubtitle>Não tem débito 👏</DueDateSubtitle>}
			</WrapperAmount>
			<PayButton disabled={true} text={'Pagar'} onPress={() => console.log()} />
		</Wrapper >
	);
}
