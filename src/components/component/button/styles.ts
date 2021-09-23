import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors'


export const ButtonWrapper = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.85
})) <{ disabled: boolean }>`
   width: 90%;
   height: 60px;
   background-color: ${props => props.disabled ? colors.COLOR_BLACK20 : colors.COLOR_YELLOW};
	border-radius: 6px;
	justify-content: center;
	align-items: center;
`

export const Title = styled.Text<{ disabled: boolean }>`
	color:${props => props.disabled ? colors.COLOR_BLACK20 : colors.COLOR_YELLOW_BUTTON_TEXT};
	font-size: 18px;
	font-family: 'Nunito_Bold';
`
