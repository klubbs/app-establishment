import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import Button from '../../component/button';

export const Wrapper = styled.View`
    flex: 1;
    padding:120px 30px;
    align-items: flex-start;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`
export const WelcomeSubtitle = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:30px;
  font-family:'Nunito_SemiBold';
`

export const Subtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:18px;
  font-family:'Nunito_Light';
`

const InputBase = styled(InputWithIcon)`
    width:100%;
    height:60px;
    margin-bottom: 30px;
`
export const Username = styled(InputBase).attrs(() => ({
    placeholder: 'e-mail',
    keyboardType: 'email-address'
}))`
    margin-top:50%;
`

export const Password = styled(InputBase).attrs(() => ({
    placeholder: 'senha',
    keyboardType: 'default',
    secureTextEntry: true
}))``

export const ButtonLogin = styled(Button).attrs(() => ({
    styleContainer: { alignSelf: 'center', marginTop: '50%' }
}))``


export const ForgotPasswordTouch = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:100%;
    top:22%;
`

export const ForgotPasswordSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:12px;
  font-family:'Nunito_Light';
`
