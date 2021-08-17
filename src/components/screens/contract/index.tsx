import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext } from './styles';
import { ContractScreenProps } from '../../../settings/interfaces/IAuthStackParams';

export const ContractScreen: React.FC<ContractScreenProps> = ({ route }) => {

    const navigation = useNavigation();

    const [accepted, setAccepted] = useState<boolean>(false)

    useEffect(() => {
        console.log(route.params)
    }, [])

    return (
        <Wrapper>
            <Container></Container>

            <ContainerSwitch>
                <Subtitle>Estou ciente e de acordo com os termos</Subtitle>
                <SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
            </ContainerSwitch>
            {
                accepted && <ButtonNext onPress={() => navigation.navigate("RegisterCode")} />
            }

        </Wrapper>
    );
}

