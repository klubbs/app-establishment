import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const Container = styled.View`
    width:90%;
    height:65%;

    color:${colors.COLOR_SECUNDARY_BLACK};
    background-color:${colors.COLOR_WHITE};
    border-radius:20px;
    padding:10px;
    font-size: 15px;
    font-family:'Nunito_Light';
`

export const ContainerSwitch = styled.View`
    width:90%;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    flex:0.2;
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
