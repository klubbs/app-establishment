import styled from 'styled-components/native'
import { InputWithMask } from '../../component/input-with-mask';
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import Button from '../../component/button';

export const Wrapper = styled.View`
	flex: 1;
	padding: 10px;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
`

export const ContainerTop = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
`

export const AlertContainer = styled.View.attrs({
	activeOpacity: 0.8,
})`
	justify-content: center;
	align-items: center;
	padding-horizontal: 25px;
	padding-vertical: 5px;
	border-radius: 5px;
	background-color: ${`${colors.COLOR_YELLOW}60`};
`;

export const AlertText = styled.Text`
	color: ${colors.COLOR_YELLOW_BUTTON_TEXT};
	font-size: 12px;
	font-family: "Nunito_Bold";
`;

export const CreditCardNumber = styled(InputWithMask as any).attrs<{ editable: boolean }>((({ editable }) => ({
	type: "credit-card",
	placeholder: 'Número do cartão',
	placeholderTextColor: colors.COLOR_BLACK50,
	options: {
		obfuscated: editable ? false : true
	},
}))) <{ editable: boolean }>`
	text-align: center;
	width: 100%;
	height:60px;
	color: ${({ editable }) => editable ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_BLACK40};
	font-family: 'Nunito_Bold';
	background-color: ${colors.COLOR_BLACK10};
`;

export const NameUserInput = styled(InputWithIcon as any).attrs(({
	placeholder: 'Nome no cartão de crédito',
})) <{ editable: boolean }>`
	text-align: center;
	width: 100%;
	font-family: 'Nunito_Bold';
	height:60px;
	background-color: ${colors.COLOR_BLACK10};
	color: ${({ editable }) => editable ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_BLACK40};
	`;

export const DateCardInput = styled(InputWithIcon as any).attrs(({
	placeholder: 'MÊS/ANO',
	inputMode: 'numeric'
})) <{ editable: boolean }>`
	text-align: center;
	font-family: 'Nunito_Bold';
	width: 49%;
	height:60px;
	background-color: ${colors.COLOR_BLACK10};
	color: ${({ editable }) => editable ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_BLACK40};
`

export const CVCCardInput = styled(InputWithIcon as any).attrs(({
	placeholder: 'CVC',
	inputMode: 'numeric'
})) <{ editable: boolean }>`
	text-align: center;
	width: 49%;
	height:60px;
	font-family: 'Nunito_Bold';
	background-color: ${colors.COLOR_BLACK10};
	color: ${({ editable }) => editable ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_BLACK40};
`
export const SaveButton = styled(Button as any).attrs<{ enable: boolean }>(({ enable }) => ({
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
