import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';



export const Wrapper = styled.View`
    flex: 1;
    justify-content:space-around;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const ValueSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:15px;
  font-family:'Nunito_Light';
`

export const WrapperAmount = styled.View`
	 width:100%;
	 align-items:center;
`

export const Amount = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:25px;
  font-family:'Nunito_Bold';
`

export const DueDateSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:12px;
  font-family:'Nunito_Light';
`

export const PayButton = styled(Button).attrs((props) => ({
	styleContainer: {
		width: '40%', height: '15%',
		backgroundColor: props.disabled ? colors.COLOR_WHITE_40 : colors.COLOR_YELLOW
	},
	styleButton: props.disabled ? { color: colors.COLOR_WHITE_80 } : {}
}))`
`

export const BlurBox = styled.View`
	width:80px;
	height:10px;
	background-color: ${colors.COLOR_WHITE_80};
`
