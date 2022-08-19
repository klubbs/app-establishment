import styled from 'styled-components/native'
import { Animated, Platform } from 'react-native'
import colors from '../../../../assets/constants/colors'
import { CancelIcon } from '../../../../assets/icons/cancel_icon'
import { widthPercentageToDP } from '../../../utils/dimensions'


const BackgroundBlurAnimated = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    background-color: ${colors.COLOR_SECUNDARY_WHITE_60};
`

export const BackgroundBlur = Animated.createAnimatedComponent(BackgroundBlurAnimated);

export const Container = styled.View`
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
    height: 60%;
    width: 100%;
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top-left-radius:${widthPercentageToDP(2)} ;
    border-top-right-radius: ${widthPercentageToDP(2)};
`

export const ContainerWrapper = styled.View`
    flex:1;
    justify-content: flex-end;
`

export const YellowBalanceContainer = styled.View<{ active: boolean }>`
    flex: 1;
    border-radius: ${widthPercentageToDP(2)};
    background-color: ${props => props.active ? colors.COLOR_YELLOW : colors.COLOR_SECUNDARY_WHITE};
    bottom: 40%;
    justify-content: center;
    align-items: center;
`

export const WhiteBalanceContainer = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: Platform.select({ ios: 0.9, android: 1 })
}))`
    width: 45%;
    margin-top: 14%;
    margin-bottom: 10%;
    border-radius: ${widthPercentageToDP(2)};
    background-color: ${colors.COLOR_WHITE};
    height: 20%;
`

export const BalanceSubtitle = styled.Text<{ active: boolean }>`
    color:${props => props.active ? colors.COLOR_YELLOW_BUTTON_TEXT : colors.COLOR_BLACK40};
    font-size:15px;
    font-family:'Nunito_ExtraLight';
`

export const Balance = styled.Text<{ active: boolean }>`
    color:${props => props.active ? colors.COLOR_YELLOW_BUTTON_TEXT : colors.COLOR_BLACK40};
    font-size:20px;
    font-family:'Nunito_ExtraBold';
`

export const RealBalance = styled.Text<{ active: boolean }>`
    color:${props => props.active ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_BLACK40};
    font-size:20px;
    font-family:'Nunito_ExtraBold';
    position: absolute;
    bottom: 5%;
    align-self: center;
`

export const CancelClick = styled.TouchableOpacity`
    /* margin-top: 61%; */
    left: 2%;
    height :50px;
    justify-content: center;
`

export const Cancel = styled(CancelIcon).attrs(() => ({
    width: 30,
    height: 30,
    fill: colors.COLOR_WHITE
}))`
`