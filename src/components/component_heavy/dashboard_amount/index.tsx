import React from 'react';
import { View } from 'react-native';

import { ValueSubtitle, Wrapper, Amount, DueDateSubtitle, WrapperAmount, PayButton } from './styles';

export const DashboardAmount: React.FC = () => {
    return (
        <Wrapper>
            <ValueSubtitle>Valor acumulado</ValueSubtitle>
            <WrapperAmount>
                <Amount>R$760,00</Amount>
                <DueDateSubtitle>10 dias para o vencimento</DueDateSubtitle>
            </WrapperAmount>
            <PayButton text={'Pagar'} onPress={() => console.log()} />
        </Wrapper>
    );
}
