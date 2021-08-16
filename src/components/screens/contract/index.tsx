import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext } from './styles';

export const ContractScreen: React.FC = () => {

    const navigation = useNavigation();

    const [accepted, setAccepted] = useState<boolean>(false)

    return (
        <Wrapper>
            <Container></Container>

            <ContainerSwitch>
                <Subtitle>Estou ciente e de acordo com os termos</Subtitle>
                <SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
            </ContainerSwitch>
            {
                accepted && <ButtonNext onPress={() => navigation.navigate({ name: 'RegisterCode' })} />
            }

        </Wrapper>
    );
}

