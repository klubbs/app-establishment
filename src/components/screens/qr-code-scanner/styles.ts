import { Platform } from 'react-native';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';
import { InputWithMask } from '../../component/input-with-mask';


export const Wrapper = styled.View`
    flex:1;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
    justify-content: 'center';
    align-items:'center' ;
`

export const SquareTop = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareLeft = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareRight = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareBottom = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`


export const CenterWrapper = styled.View`
    flex:1;
    flex-direction: row;
`


export const Focused = styled.View`
    flex:${Platform.select({ ios: 10, android: 2 })};
`

export const ScanSubtitle = styled.Text`
  color:${colors.COLOR_WHITE};
  position: absolute;
  top: 12%;
  left: ${Platform.select({ ios: '30%', android: '35%' })};
  font-size:20px;
  font-family:'Nunito_SemiBold';
`

export const ScanDescSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_40};
  position: absolute;
  top: 16%;
  left: ${Platform.select({ ios: '14%', android: '20%' })};
  font-size:15px;
  font-family:'Nunito_Regular';
`

export const ApproximateAmount = styled.Text.attrs(({
    numberOfLines: 1
}))`
  color:${colors.COLOR_YELLOW};
  font-size:18px;
  font-family:'Nunito_Bold';
`

export const ApproximateAmountDesc = styled.Text`
  color:${colors.COLOR_WHITE_80};
  align-items:center;
  position: absolute;
  top: 30%;
  left: 24%;
  font-size:14px;
  font-family:'Nunito_Light';
`

export const CheckoutDescSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  align-items:center;
  position: absolute;
  margin-top:5%;
  left: 20%;
  font-size:14px;
  font-family:'Nunito_Light';
`


export const ScanOtherButton = styled(Button).attrs((props: { error: boolean }) => ({
    text: props.error ? 'TENTAR NOVAMENTE' : "VALIDAR OUTRO",
    styleContainer: {
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        backgroundColor: props.error ? colors.COLOR_RED : colors.COLOR_YELLOW
    },
    styleButton: props.error ? { color: colors.COLOR_WHITE } : {}
})) <{ error: boolean }>`
`


export const CheckoutAmount = styled(InputWithMask).attrs(({
    placeholder: 'R$0,00',
    keyboardType: 'numeric',
    type: 'money',
    options: {
        unit: 'R$',
    },
    placeholderTextColor: colors.COLOR_BLACK50,
}))`
    width: 80%;
    height: 70px;
    font-family: 'Nunito_Bold';
    position:absolute;
    bottom:10%;   
    left:10%;
    font-size: 25px;
    text-align:center;
`

export const KeyboardCheckoutAmount = styled.KeyboardAvoidingView.attrs(({
    behavior: 'position'
}))`
    bottom:20%;   
`

export const WrapperApproxAmount = styled.View`
    align-items:center;
    justify-content:center ;
    width: 40%;
    position:absolute;
    top: 24%;
    left: 30%;
    background-color: ${colors.COLOR_WHITE_20};
    border-radius:5px ;
    padding-left: 25px ;
    padding-right: 25px ;
    padding-top: 12px ;
    padding-bottom: 12px ;
`