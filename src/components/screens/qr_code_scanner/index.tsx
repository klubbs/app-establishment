import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../../../../assets/constants/colors';
import { Spinner } from '../../component/spinner';
import { CouponService } from '../../../services/coupon_service';
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

export const QrCodeScanner: React.FC = () => {

	const navigation = useNavigation();

	const [hasPermission, setHasPermission] = useState<boolean>(false);
	const [scanned, setScanned] = useState(false);
	const [loading, setLoading] = useState(false)
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		(async () => {
			const { granted } = await BarCodeScanner.requestPermissionsAsync();

			setHasPermission(granted);

			if (!granted) {
				navigation.goBack();
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
			await CouponService.scanCoupon(couponId, userId)

			Flash.customMessage(
				"Você já pode validar outros cupons",
				"Cupom validado com sucesso",
				'SUCCESS'
			)

			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success)

		} catch (error) {
			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning)
			setHasError(true)
			CouponService.catchScanCoupon(error as IError)
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
				flex: 1,
				backgroundColor: colors.COLOR_SECUNDARY_BLACK,
				justifyContent: 'center', alignItems: 'center'
			}}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}

					style={StyleSheet.absoluteFillObject}
				>
					<SquareTop />
					<ScanSubtitle>VALIDAR CUPOM</ScanSubtitle>
					<ScanDescSubtitle>Escaneie o cupom para fazer uma venda</ScanDescSubtitle>
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
