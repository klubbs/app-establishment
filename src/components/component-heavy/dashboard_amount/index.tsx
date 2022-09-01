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

	const requestBalanceRef = useRef<IRequestBalanceRef>(null)
	const { getDashboard, walletAmount, refreshing } = useContext(DashboardContext)

	const [showSkeleton, setShowSkeleton] = useState(true)

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
									ios: walletAmount.toLocaleString('pt-br',
										{ style: 'currency', currency: 'BRL' }),
									android: `R$ ${walletAmount}`
								})
							}
						</Amount>
					</Skeleton>
				</MotiView>
				<DueDateSubtitle> Saldo insuficiente para novas transações 😰</DueDateSubtitle>
			</WrapperAmount>
			<PayButton disabled={false} onPress={() => requestBalanceRef.current?.openModal()} />
			<RequestBalance ref={requestBalanceRef} />
		</Wrapper >
	);
}
