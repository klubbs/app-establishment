import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { ButtonQr } from '../../component/button_qr';
import { DashboardAmount } from '../../component_heavy/dashboard_amount';
import { Transactions } from '../../component_heavy/transactions';
import { useNavigation } from '@react-navigation/native';
import { ButtonCreateCoupon } from '../../component/button_create_coupon';
import { ButtonDrawer } from '../../component/button_drawer';
import { CouponCreate } from '../../component_heavy/coupon_create';

// import { Container } from './styles';



export const HomeScreen: React.FC = ({ }) => {

    const [visibleCoupon, setVisibleCoupon] = useState(false)

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
                <View style={{ flex: 1, backgroundColor: colors.COLOR_SECUNDARY_BLACK }}>
                    <View style={{ flex: 0.3 }} />]

                    <DashboardAmount />
                    <Transactions />
                    <ButtonQr onPress={() => navigation.navigate('QrScanner')} />
                </View>
                <CouponCreate visible={visibleCoupon} onCancellCb={() => setVisibleCoupon(!visibleCoupon)} />
            </>
        )

    );
}
