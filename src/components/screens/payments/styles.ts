import styled from 'styled-components/native'
import { InputWithMask } from '../../component/input-with-mask';
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import Button from '../../component/button';


export const CreditCardNumber = styled(InputWithMask).attrs<{ editable: boolean }>((({ editable }) => ({
	type: "credit-card",
	placeholder: 'Número do cartão',
	placeholderTextColor: colors.COLOR_BLACK50,
	options: {
		obfuscated: editable ? false : true
	},
})))`
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
	placeholder: 'MÊS/ANO',
	inputMode: 'numeric'
}))`
	text-align: center;
	width: 49%;
	height:60px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const CVCCardInput = styled(InputWithIcon).attrs(({
	placeholder: 'CVC',
	inputMode: 'numeric'
}))`
	text-align: center;
	width: 49%;
	height:60px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	color: ${colors.COLOR_SECUNDARY_BLACK};
`
export const SaveButton = styled(Button).attrs<{ enable: boolean }>(({ enable }) => ({
	styleContainer: { backgroundColor: enable ? colors.COLOR_GREEN : colors.COLOR_YELLOW },
	styleButton: { color: enable ? colors.COLOR_SECUNDARY_GREEN : colors.COLOR_YELLOW_BUTTON_TEXT }
}))`
`
export const CardBackground = styled.View`
	background-color: ${colors.COLOR_SECUNDARY_BLACK} ;
	border-radius: 15px;
	width: 90%;
	height: 45% ;
	padding:15px;
	justify-content: flex-end;
	row-gap: 50px;
`
export const CardTexts = styled.Text`
	color: ${colors.COLOR_SECUNDARY_WHITE};
	font-size: 15px;
  font-family:'Nunito_Bold';
`
