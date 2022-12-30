import React, { useEffect, useState, useContext } from 'react';
import { ButtonQr } from '../../component/button_qr';
import { DashboardAmount } from '../../component-heavy/dashboard_amount';
import { Transactions } from '../../component-heavy/transactions';
import { useNavigation } from '@react-navigation/native';
import { ButtonCreateOffer } from '../../component/button_create_offer';
import { ButtonDrawer } from '../../component/button_drawer';
import { OfferCreate } from '../../component-heavy/offer_create';
import { Wrapper } from './styles'
import { AuthContext } from '../../../contexts/auth-context';
import { DashboardDocs } from '../../component-heavy/dashboardDocs';
import { Flash } from '../../../utils/flash';
import * as Haptic from 'expo-haptics';
import { IAppStackParams } from '../../../settings/@types/iapp-stack-params';
import { StackNavigationProp } from '@react-navigation/stack';


export const HomeScreen: React.FC = ({ }) => {

	const [visibleOffer, setVisibleOffer] = useState(false)
	const { establishment } = useContext(AuthContext)

	const navigation = useNavigation<StackNavigationProp<IAppStackParams>>();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <ButtonCreateOffer onPress={handleOfferButton} />,
			headerLeft: () => <ButtonDrawer />
		})
	}, [establishment])

	function handleOfferButton() {
		if (establishment?.documentation_status !== "OK") {

			Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)

			Flash.customMessage(
				"Sua documentação esta pendente ou em análise",
				"Documentação",
				"NEUTRAL"
			)
			return;
		}

		setVisibleOffer(!visibleOffer)
	}

	function handleQrButton() {
		if (establishment?.documentation_status !== "OK") {

			Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)

			Flash.customMessage(
				"Sua documentação esta pendente ou em análise",
				"Documentação",
				"NEUTRAL"
			)
			return;
		}

		navigation.navigate('QrScanner')
	}


	return (
		(
			<>
				<Wrapper>
					{establishment?.documentation_status !== "OK" && <DashboardDocs />}
					{establishment?.documentation_status === "OK" && <DashboardAmount />}
					<Transactions />
					<ButtonQr onPress={handleQrButton} />
				</Wrapper>
				<OfferCreate
					visible={visibleOffer}
					onCancellCb={() => setVisibleOffer(false)}
				/>
			</>
		)

	);
}
