import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'react-native'
import { ButtonQr } from '../../component/button_qr';
import { DashboardAmount } from '../../component_heavy/dashboard_amount';
import { Transactions } from '../../component_heavy/transactions';
import { useNavigation } from '@react-navigation/native';
import { ButtonCreateCoupon } from '../../component/button_create_coupon';
import { ButtonDrawer } from '../../component/button_drawer';
import { CouponCreate } from '../../component_heavy/coupon_create';
import { Wrapper } from './styles'
import { AuthContext } from '../../../contexts/auth_context';
import { DashboardDocs } from '../../component_heavy/dashboardDocs';
import { Flash } from '../../../utils/flash';
import * as Haptic from 'expo-haptics';


export const HomeScreen: React.FC = ({ }) => {

	const [visibleCoupon, setVisibleCoupon] = useState(false)
	const { establishment } = useContext(AuthContext)

	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <ButtonCreateCoupon onPress={handleCouponButton} />,
			headerLeft: () => <ButtonDrawer />
		})
	}, [establishment])

	function handleCouponButton() {
		if (establishment?.documentationStatus !== "OK") {

			Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)

			Flash.customMessage(
				"Sua documentação esta pendente ou em análise",
				"Documentação",
				"NEUTRAL"
			)
			return;
		}

		setVisibleCoupon(!visibleCoupon)
	}

	function handleQrButton() {
		if (establishment?.documentationStatus !== "OK") {

			Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)

			Flash.customMessage(
				"Sua documentação esta pendente ou em análise",
				"Documentação",
				"NEUTRAL"
			)
			return;
		}

		navigation.navigate({ name: 'QrScanner' })
	}


	return (
		(
			<>
				<StatusBar barStyle={'light-content'} animated={true} />
				<Wrapper>
					{establishment?.documentationStatus !== "OK" && <DashboardDocs />}
					{establishment?.documentationStatus === "OK" && <DashboardAmount />}
					<Transactions />
					<ButtonQr onPress={handleQrButton} />
				</Wrapper>
				<CouponCreate
					visible={visibleCoupon}
					onCancellCb={() => setVisibleCoupon(!visibleCoupon)}
				/>
			</>
		)

	);
}
