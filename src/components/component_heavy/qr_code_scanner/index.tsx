import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../../../../assets/constants/colors';
import { CenterWrapper, Focused, ScanSubtitle, SquareBottom, SquareLeft, SquareRight, SquareTop, ScanDescSubtitle } from './styles';
import { useNavigation } from '@react-navigation/native';

export const QrCodeScanner: React.FC = () => {

	const navigation = useNavigation();

	const [hasPermission, setHasPermission] = useState<boolean>(false);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		(async () => {
			const { granted } = await BarCodeScanner.requestPermissionsAsync();

			setHasPermission(granted);

			if (!granted) {
				navigation.goBack();
			}
		})();
	}, []);


	const handleBarCodeScanned = ({ type, data }: { type: any, data: any }) => {
		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);


		setScanned(false)
	};

	if (hasPermission === false) {
		return (<View />)
	}


	return (
		<View style={{ flex: 1, backgroundColor: colors.COLOR_SECUNDARY_BLACK, justifyContent: 'center', alignItems: 'center' }}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}

				style={StyleSheet.absoluteFillObject}
			>
				<SquareTop />
				<ScanSubtitle>VALIDAR CUPOM</ScanSubtitle>
				<ScanDescSubtitle>Escaneie o cupom para validar</ScanDescSubtitle>
				<CenterWrapper>
					<SquareLeft />
					<Focused />
					<SquareRight />
				</CenterWrapper>
				<SquareBottom />

			</BarCodeScanner>

		</View>
	);
}
