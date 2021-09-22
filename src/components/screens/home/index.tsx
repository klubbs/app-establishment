import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import colors from '../../../../assets/constants/colors';
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



export const HomeScreen: React.FC = ({ }) => {

	const [visibleCoupon, setVisibleCoupon] = useState(false)
	const { establishment } = useContext(AuthContext)

	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <ButtonCreateCoupon onPress={() => setVisibleCoupon(!visibleCoupon)} />,
			headerLeft: () => <ButtonDrawer />
		})
	}, [])


	return (
		(
			<>
				<Wrapper>
					{establishment?.documentationStatus !== "OK" && <DashboardDocs />}
					{establishment?.documentationStatus === "OK" && <DashboardAmount />}
					<Transactions />
					<ButtonQr onPress={() => navigation.navigate({ name: 'QrScanner' })} />
				</Wrapper>
				<CouponCreate
					visible={visibleCoupon}
					onCancellCb={() => setVisibleCoupon(!visibleCoupon)}
				/>
			</>
		)

	);
}
