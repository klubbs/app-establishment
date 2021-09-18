import React from 'react'
import { WelcomeLogoImage } from '../../../../assets/images/welcome-logo-image'
import Button from '../../component/button'
import {
    Wrapper,
    ImageBackgroundWelcomeIcons,
    ContainerButtons,
    Enter,
    EnterDesc,
    ContainerEnter,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { RegisterService } from '../../../services/register_service'
import Constants from 'expo-constants'

export const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Wrapper>
            <WelcomeLogoImage style={{ marginLeft: '5%' }} />
            <ImageBackgroundWelcomeIcons
                source={require('../../../../assets/images/welcome-login-icons-image.png')}
            />
            <ContainerButtons>
                <Button
                    text={'ABRIR CONTA'}
                    onPress={() => navigation.navigate({ name: 'Register' })}
                    styleContainer={{ flex: 1.5 }}
                />
                <ContainerEnter onPress={() => navigation.navigate({ name: 'Login' })}>
                    <Enter>Entrar</Enter>
                    <EnterDesc>Já tenho conta</EnterDesc>
                </ContainerEnter>
            </ContainerButtons>
        </Wrapper>
    )
}
