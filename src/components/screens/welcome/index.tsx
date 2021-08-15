import React from 'react';
import { View, Text } from 'react-native';
import { WelcomeLogoImage } from '../../../../assets/images/welcome-logo-image';
import Button from '../../component/button';
import { Wrapper, ImageBackgroundWelcomeIcons, ContainerButtons, Enter, EnterDesc, ContainerEnter } from './styles';
import { useNavigation } from '@react-navigation/native';


export const WelcomeScreen: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Wrapper >
            <WelcomeLogoImage style={{ marginLeft: '5%' }} />
            <ImageBackgroundWelcomeIcons source={require('../../../../assets/images/welcome-login-icons-image.png')} />
            <ContainerButtons>
                <Button text={"ABRIR CONTA"} onPress={() => console.log()} styleContainer={{ flex: 1.5 }} />
                <ContainerEnter onPress={() => console.log()}>
                    <Enter>Entrar</Enter>
                    <EnterDesc>Já tenho conta</EnterDesc>
                </ContainerEnter>
            </ContainerButtons>
        </Wrapper>
    );
}
