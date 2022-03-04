import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Linking, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../../../../assets/constants/colors';
import { Spinner } from '../../component/spinner';
import { OfferService } from '../../../services/offerService';
import { Flash } from '../../../utils/flash';
import * as Haptic from 'expo-haptics';
import { IError } from '../../../settings/services/api';
import {
	CenterWrapper,
	Focused,
	ScanSubtitle,
	SquareBottom,
	SquareLeft,
	SquareRight,
	SquareTop,
	ScanDescSubtitle,
	ScanOtherButton,
} from './styles';
import { Middlewares } from '../../../utils/middlewares';
import { DashboardContext } from '../../../contexts/dashboard_context';

export const QrCodeScanner: React.FC = () => {

	const navigation = useNavigation();
	const { futureCheckouts } = useContext(DashboardContext)

	const [hasPermission, setHasPermission] = useState<boolean>(false);
	const [scanned, setScanned] = useState(false);
	const [loading, setLoading] = useState(false)
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		(async () => {
			const { granted } = await BarCodeScanner.requestPermissionsAsync();

			setHasPermission(granted);

			if (!granted) {
				Alert.alert(
					"Conceda acesso a câmera",
					"Para que você possa acessar a câmera precisamos da sua permissão",
					[
						{
							text: "Não",
							onPress: () => navigation.goBack(),
							style: "cancel"
						},
						{
							text: "OK", onPress: () => {
								Linking.openSettings();
								navigation.goBack()
							}
						}
					]
				)
			}
		})();
	}, []);


	async function handleBarCodeScanned({ type, data }: { type: any, data: any }) {

		try {

			setScanned(true)
			setLoading(true)

			const splitedValues = data.split('|')

			const couponId = splitedValues[0]
			const userId = splitedValues[1]

			if (!couponId || !userId) {
				Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning)
				setHasError(true)
				Flash.customMessage("Esse não é um cupom válido", "Cupom inválido", "WARNING")
				return;
			}
			await OfferService.scanCoupon(couponId, userId)

			Flash.customMessage(
				"Você já pode validar outros cupons",
				"Cupom validado com sucesso",
				'SUCCESS'
			)

			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success)

		} catch (error) {
			Middlewares.middlewareError(
				() => {
					Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning)
					setHasError(true)
					OfferService.catchScanCoupon(error as IError)
				}, error
			)
		} finally {
			setLoading(false)
		}

	};

	function handleResetValues() {
		setHasError(false)
		setScanned(false)
	}

	if (hasPermission === false) {
		return (<View />)
	}

	return (
		<>
			<Spinner loading={loading} />
			<View style={{
				flex: 1, backgroundColor: colors.COLOR_SECUNDARY_BLACK,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={
						Platform.select({
							ios: { ...StyleSheet.absoluteFillObject },
							android: { width: '140%', height: '100%' }
						})
					}>
					<SquareTop />
					{futureCheckouts && <ScanSubtitle>VALIDAR CUPOM</ScanSubtitle>}
					<ScanDescSubtitle futureCheckouts={futureCheckouts}>{
						futureCheckouts
							? 'Escaneie o cupom para validar uma oferta'
							: 'Saldo insuficiente para novas transações'
					}</ScanDescSubtitle>
					<CenterWrapper>
						<SquareLeft />
						<Focused />
						<SquareRight />
					</CenterWrapper>
					<SquareBottom />

				</BarCodeScanner>
				{
					(scanned && !loading) &&
					<ScanOtherButton
						error={hasError}
						onPress={() => handleResetValues()}
					/>
				}
			</View>
		</>
	);
}
