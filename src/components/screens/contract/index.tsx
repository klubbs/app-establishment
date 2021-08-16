import React, { useState } from 'react';
import { View } from 'react-native';

import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext } from './styles';

export const ContractScreen: React.FC = () => {

    const [accepted, setAccepted] = useState<boolean>(false)

    return (
        <Wrapper>
            <Container></Container>

            <ContainerSwitch>
                <Subtitle>Estou ciente e de acordo com os termos</Subtitle>
                <SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
            </ContainerSwitch>
            {
                accepted && <ButtonNext onPress={() => { }} />
            }

        </Wrapper>
    );
}

