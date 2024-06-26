import React from 'react';
import colors from '../../../../assets/constants/colors';
import { MoneyIcon } from '../../../../assets/icons/money_icon';
import { formatUserCouponCode } from '../../../utils/formatter';
import { ITransactionItems } from '../../component-heavy/transactions/interfaces';
import {
	GreenContainer,
	Influencer,
	Subtitle,
	Wrapper,
	WrapperLeft,
	WrapperMiddle,
	WrapperRight,
	Amount,
	DiscountAmount
} from './styles';
import { View } from 'react-native';

export const TransactionItem: React.FC<ITransactionItems> = (props) => {
	return (
		<Wrapper>
			<WrapperLeft>
				<GreenContainer>
					<MoneyIcon fill={colors.COLOR_SECUNDARY_GREEN} width="40" height="40" />
				</GreenContainer>
			</WrapperLeft>

			<WrapperMiddle>
				<Influencer>{formatUserCouponCode(props.partner_coupon_name)}</Influencer>
				<Subtitle>{
					props
						.checkout_at
						.ToDateFormat()
						.toLocaleTimeString("pt-br",
							{
								formatMatcher: "best fit",
								day: 'numeric',
								month: 'numeric',
								hour: '2-digit',
								minute: '2-digit'
							})
				} &#xB7; {formatUserCouponCode(props.coupon_code)}</Subtitle>
			</WrapperMiddle>
			<View>
				<WrapperRight>
					<Amount>R$ {props.checkout_amount}</Amount>
				</WrapperRight>
				<WrapperRight>
					<DiscountAmount>R$ {props.discount}</DiscountAmount>
				</WrapperRight>
			</View>
		</Wrapper>
	);
}
