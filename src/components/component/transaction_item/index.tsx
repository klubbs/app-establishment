import React from 'react';
import colors from '../../../../assets/constants/colors';
import { MoneyIcon } from '../../../../assets/icons/money_icon';
import { ITransactionItemParams } from './interfaces';

import { GreenContainer, Influencer, Subtitle, Wrapper, WrapperLeft, WrapperMiddle, WrapperRight, Amount } from './styles';

export const TransactionItem: React.FC<ITransactionItemParams> = (props) => {
	return (
		<Wrapper>
			<WrapperLeft>
				<GreenContainer>
					<MoneyIcon
						fill={colors.COLOR_SECUNDARY_GREEN}
						width="40"
						height="40"
					/>
				</GreenContainer>
			</WrapperLeft>

			<WrapperMiddle>
				<Influencer>{props.influencer}</Influencer>
				<Subtitle>{props.date
					.toLocaleTimeString("pt-br",
						{
							formatMatcher: "best fit",
							day: 'numeric',
							month: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})
				} &#xB7; {props.coupon}</Subtitle>
			</WrapperMiddle>

			<WrapperRight>
				<Amount>R$ {props.amount}</Amount>
			</WrapperRight>
		</Wrapper>
	);
}
