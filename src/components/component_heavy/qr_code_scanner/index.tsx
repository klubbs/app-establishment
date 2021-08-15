import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import colors from '../../../../assets/constants/colors';
import { CenterWrapper, Focused, ScanSubtitle, SquareBottom, SquareLeft, SquareRight, SquareTop, ScanDescSubtitle } from './styles';

// import { Container } from './styles';

export const QrCodeScanner: React.FC = () => {

    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();

            setHasPermission(status === 'granted');
        })();
    }, []);


    const handleBarCodeScanned = ({ type, data }: { type: any, data: any }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
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
                {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
            </BarCodeScanner>

        </View>
    );
}
