import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`

export const Container = styled.View< { active: boolean }>`
	width: 40px;
	height: 30px;
	background-color: ${props => props.active ? colors.COLOR_YELLOW : colors.COLOR_BLACK40};
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`

export const WrapperSelector = styled.View`
	height: 60px;
	justify-content: space-around;
	align-items: center;
`

export const Text = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:12px;
  font-family:'Nunito_Bold';
`
