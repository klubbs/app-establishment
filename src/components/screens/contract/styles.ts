import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const ContainerScroll = styled.View`
    height:60%;
	 width:90%;
	 align-items: center;
	 justify-content: space-evenly;
`

export const ContainerSwitch = styled.View`
    width:90%;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
`
export const WrapperSwitch = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

export const Terms = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:14px;
  font-family:'Nunito_ExtraLight';
`

export const BoldTerms = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:20px;
  font-family:'Nunito_ExtraLight';
`

export const Tutorial = styled.Text`
  color:${colors.COLOR_YELLOW};
  font-size:14px;
  font-family:'Nunito_SemiBold';
`

export const Subtitle = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:14px;
  font-family:'Nunito_Light';
`

export const ButtonNext = styled(Button).attrs(() => ({
	text: 'De acordo',
	styleContainer: { width: '90%', height: 60, top: 90, position: 'absolute', top: '95%' }
}))`
    position: absolute;
`


export const SwitchContract = styled.Switch.attrs(() => ({
	trackColor: { false: colors.COLOR_SECUNDARY_BLACK, true: colors.COLOR_YELLOW }
}))`

`
