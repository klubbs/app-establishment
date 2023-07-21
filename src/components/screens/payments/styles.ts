import styled from 'styled-components/native'
import { InputWithMask } from '../../component/input-with-mask';
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';


export const CreditCardNumber = styled(InputWithMask).attrs({
	type: "credit-card",
	placeholder: 'Número do cartão',
	options: {
		obfuscated: false
	},
})`
	text-align: center;
	width: 100%;
	height:60px;
	color: ${colors.COLOR_SECUNDARY_BLACK};
	background-color: ${colors.COLOR_BLACK10};
`;

export const NameUserInput = styled(InputWithIcon).attrs(({
	placeholder: 'Nome no cartão de crédito',
}))`
	text-align: center;
	width: 100%;
	height:60px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	color: ${colors.COLOR_SECUNDARY_BLACK};
`;

export const DateCardInput = styled(InputWithIcon).attrs(({
	placeholder: 'MÊS/ANO'
}))`
	text-align: center;
	width: 49%;
	height:60px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const CVCCardInput = styled(InputWithIcon).attrs(({
	placeholder: 'CVC'
}))`
	text-align: center;
	width: 49%;
	height:60px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	color: ${colors.COLOR_SECUNDARY_BLACK};
`
