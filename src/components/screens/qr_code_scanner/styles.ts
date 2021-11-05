import { Platform } from 'react-native';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { CouponIcon } from '../../../../assets/icons/coupon_icon';
import Button from '../../component/button';


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
  top: 20%;
  left: ${Platform.select({ ios: '30%', android: '35%' })};
  font-size:20px;
  font-family:'Nunito_SemiBold';
`

export const ScanDescSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  position: absolute;
  top: 24%;
  left: ${Platform.select({ ios: '18%', android: '23%' })};
  font-size:15px;
  font-family:'Nunito_Light';
`

export const ScanOtherButton = styled(Button).attrs((props: { error: boolean }) => ({
    text: props.error ? 'Tentar novamente' : "Validar outro",
    styleContainer: {
        position: 'absolute', bottom: '10%',
        backgroundColor: props.error ? colors.COLOR_RED : colors.COLOR_YELLOW
    },
    styleButton: props.error ? { color: colors.COLOR_WHITE } : {}
})) <{ error: boolean }>``
