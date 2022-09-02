import React, { useEffect, useState, useContext, useRef } from 'react';
import { Platform, RefreshControl } from 'react-native'
import { Skeleton } from '@motify/skeleton'
import { MotiView } from 'moti'
import {
	ValueSubtitle,
	Wrapper, Amount, DueDateSubtitle, WrapperAmount, PayButton
} from './styles';
import colors from '../../../../assets/constants/colors';
import { DashboardContext } from '../../../contexts/dashboard-context';
import { RequestBalance } from '../requestBalance';
import { IRequestBalanceRef } from '../requestBalance/@types';

export const DashboardAmount: React.FC = () => {

	const { getDashboard, walletStore, refreshing } = useContext(DashboardContext)
	const requestBalanceRef = useRef<IRequestBalanceRef>(null)

	const [showSkeleton, setShowSkeleton] = useState(true)

	const walletAmount = walletStore?.wallet_amount ?? 0

	useEffect(() => {
		getDashboardWithSkeleton();
	}, [])

	async function getDashboardWithSkeleton() {

		try {
			setShowSkeleton(true)

			await getDashboard();

		} finally {
			setShowSkeleton(false)
		}

	}

	return (
		<Wrapper
			refreshControl=
			{
				<RefreshControl
					refreshing={refreshing}
					onRefresh={getDashboardWithSkeleton}
					tintColor={colors.COLOR_WHITE}
					colors={[colors.COLOR_WHITE]}
				/>
			}
		>
			<ValueSubtitle>Seu saldo</ValueSubtitle>
			<WrapperAmount>
				<MotiView>
					<Skeleton show={showSkeleton} colorMode={'light'}>
						<Amount>
							{
								Platform.select({
									ios: walletAmount.toLocaleString(
											'pt-br', { style: 'currency', currency: 'BRL' }),
									android: `R$ ${walletAmount}`
								})
							}
						</Amount>
					</Skeleton>
				</MotiView>
				<DueDateSubtitle>
					Análise seu saldo antes de fazer uma validação 👋
				</DueDateSubtitle>
			</WrapperAmount>
			<PayButton disabled={false} onPress={() => requestBalanceRef.current?.openModal()} />
			<RequestBalance ref={requestBalanceRef} />
		</Wrapper >
	);
}
