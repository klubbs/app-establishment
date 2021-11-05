import { Platform, View } from 'react-native';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';



export const Wrapper = styled.View`
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
    justify-content: center;
    align-items: flex-start;
    flex: 1;
`

export const ImageBackgroundWelcomeIcons = styled.ImageBackground`
    width: 100%;
    height: 40%;
`

export const ContainerButtons = styled.View`
    height: 30%;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const ContainerEnter = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8
}))`
    left: 40px;
    flex: 1;
    justify-content: center;
`

export const Enter = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:20px;
  font-family:'Nunito_SemiBold';
`

export const EnterDesc = styled.Text`
color:${colors.COLOR_WHITE_40};
font-size:12px;
font-family:'Nunito_Light';
`