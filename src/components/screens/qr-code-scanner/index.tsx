import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Linking, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Spinner } from '../../component/spinner';
import { OfferService } from '../../../services/offer-service';
import { Flash } from '../../../utils/flash';
import * as Haptic from 'expo-haptics';
import { IError } from '../../../settings/connection';
import {
	Wrapper,
	KeyboardCheckoutAmount,
	CenterWrapper,
	Focused,
	ScanSubtitle,
	SquareBottom,
	SquareLeft,
	SquareRight,
	SquareTop,
	ScanDescSubtitle,
	ScanOtherButton,
	CheckoutAmount,
	CheckoutDescSubtitle,
	ApproximateAmount,
	WrapperApproxAmount,
	ApproximateAmountDesc
} from './styles';
import { Middlewares } from '../../../utils/middlewares';

export const QrCodeScanner: React.FC = () => {

	const navigation = useNavigation();

	const [hasPermission, setHasPermission] = useState<boolean>(false);
	const [amount, setAmount] = useState<string>('')
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

		if (scanned) {
			return;
		}

		if (amount === '' || amount === 'R$0,00') {

			Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Medium);

			Flash.customMessage(
				'É necessário preencher o valor total do pedido para validar',
				'Preencha o valor do pedido',
				'NEUTRAL'
			);

			return;
		}

		const checkoutId = data.split('|')[1];

		if (!checkoutId) {
			setHasError(true)

			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning)
			Flash.customMessage(
				"Este não um cupom válido klubbs",
				"Cupom inválido",
				"WARNING")
			return;
		}

		try {
			setScanned(true)
			setLoading(true)

			await OfferService.scanCoupon(
				checkoutId,
				amount
					.replace('R$', '')
					.replace('.', '')
					.replace(',', '.')
			)

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
					OfferService.catchScanCoupon(error as IError)
					setHasError(true)
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

	function handleSetAmount(newAmount: string) {
		setAmount(newAmount == 'R$0,00' ? '' : newAmount)
	}

	function RenderTopSubtitles() {

		const convertedAmount = amount
			.replace('R$', '')
			.replaceAll('.', '')
			.replaceAll(',', '.')

		const approxAmount = Number(convertedAmount) * 0.08

		return (
			<>
				<ScanSubtitle>VALIDAR CUPOM</ScanSubtitle>
				<ScanDescSubtitle >Escaneie o cupom para completar um checkout</ScanDescSubtitle>
				<WrapperApproxAmount>
					<ApproximateAmount>~ {
						approxAmount
							.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
					}
					</ApproximateAmount>
				</WrapperApproxAmount>
				<ApproximateAmountDesc>
					Esse será o valor aproximadamente
				</ApproximateAmountDesc>
			</>
		)

	}

	if (hasPermission === false) {
		return (<View />)
	}

	return (
		<>
			<Spinner loading={loading} />
			<Wrapper>

				<BarCodeScanner
					onBarCodeScanned={handleBarCodeScanned}
					style={
						Platform.select({
							ios: { ...StyleSheet.absoluteFillObject },
							android: { width: '140%', height: '100%' }
						})
					}>

					<SquareTop />
					<RenderTopSubtitles />
					<CenterWrapper>
						<SquareLeft />
						<Focused />
						<SquareRight />
					</CenterWrapper>
					<SquareBottom />

					<KeyboardCheckoutAmount>
						<CheckoutAmount
							value={amount}
							onChangeText={handleSetAmount}
						/>
						<CheckoutDescSubtitle >
							Valor total do pedido ( Podendo arredondar )
						</CheckoutDescSubtitle>

					</KeyboardCheckoutAmount>
				</BarCodeScanner>
				{
					(scanned && !loading) &&
					<ScanOtherButton
						error={hasError}
						onPress={handleResetValues}
					/>
				}
			</Wrapper>
		</>
	);
}
