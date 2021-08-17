import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../../contexts/auth_context';
import { LoginService } from '../../../services/loginService';
import { isEmpty } from '../../../utils/extensions/object_extensions';
import { Flash } from '../../../utils/flash';
import Button from '../../component/button';

import { Wrapper, WelcomeSubtitle, Subtitle, Username, Password, ButtonLogin, ForgotPasswordTouch, ForgotPasswordSubtitle } from './styles';

export const LoginScreen: React.FC = () => {

    const { signIn } = useContext(AuthContext)

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onLogin = async () => {
        try {
            //TODO: LOADING

            const valid = LoginService.validate({ password: password, mail: login });

            if (!isEmpty(valid)) {
                Flash.incompleteLogin();
                return
            }

            await signIn(login, password);


        } catch (error) {
            //TODO:VALIDAR ERROS API
        } finally {

        }
    }

    return (
        <Wrapper>
            <WelcomeSubtitle>Vamos conectar você.</WelcomeSubtitle>
            <Subtitle>Bem-vindo de volta.{"\n"}Sentimos sua falta!</Subtitle>

            <Username
                value={login} setValue={(e: string) => setLogin(e)}
            />
            <Password
                value={password} setValue={(e: string) => setPassword(e)}
            />

            <ForgotPasswordTouch onPress={() => console.log('cú')}>
                <ForgotPasswordSubtitle>Esqueceu sua senha ?</ForgotPasswordSubtitle>
            </ForgotPasswordTouch>

            <ButtonLogin text={'Login'} onPress={() => onLogin()} />
        </Wrapper>
    );
}
