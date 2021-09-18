import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors'


export const ButtonWrapper = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.85
}))`
  width: 90%;
  height: 60px;
  background-color: ${colors.COLOR_YELLOW};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color:${colors.COLOR_YELLOW_BUTTON_TEXT};
  font-size:18px;
  font-family:'Nunito_Bold';`
