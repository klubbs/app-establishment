import React from 'react';
import { Skeleton } from '@motify/skeleton'
import { ValueSubtitle, Wrapper, Amount, DueDateSubtitle, WrapperAmount, PayButton, BlurBox } from './styles';

export const DashboardAmount: React.FC = () => {
	return (
		<Wrapper>
			<ValueSubtitle>Valor acumulado</ValueSubtitle>
			<WrapperAmount>
				<Skeleton show={true} height={48} width={48} radius="round" colorMode={'light'} />
				{/* <Amount>R$00,00</Amount> */}
				{/* 10 dias para o vencimento */}
				<DueDateSubtitle>Seu saldo esta positivo 👏</DueDateSubtitle>
			</WrapperAmount>
			<PayButton disabled={true} text={'Pagar'} onPress={() => console.log()} />
		</Wrapper >
	);
}
