import React from 'react';
import { SafeAreaView } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { CouponIcon } from '../../../../assets/icons/coupon_icon';

import { Wrapper } from './styles';

export const ButtonCreateOffer: React.FC<{ onPress: any }> = (props) => {
	return (
		<Wrapper onPress={props.onPress} >
			<CouponIcon fill={colors.COLOR_YELLOW_BUTTON_TEXT} width={25} height={25} />
		</Wrapper >
	);
}
