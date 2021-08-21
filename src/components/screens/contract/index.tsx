import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext } from './styles'
import { ContractScreenProps } from '../../../settings/interfaces/iauth_stack_params'

export const ContractScreen: React.FC<ContractScreenProps> = ({ route }) => {
    const navigation = useNavigation()

    const [accepted, setAccepted] = useState<boolean>(false)

    useEffect(() => {}, [])

    return (
        <Wrapper>
            <Container></Container>

            <ContainerSwitch>
                <Subtitle>Estou ciente e de acordo com os termos</Subtitle>
                <SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
            </ContainerSwitch>
            {accepted && (
                <ButtonNext onPress={() => navigation.navigate('RegisterCode', route.params)} />
            )}
        </Wrapper>
    )
}
