import React from 'react';
import { Skeleton } from '@motify/skeleton'
import { MotiView } from 'moti'
import { ValueSubtitle, Wrapper, Amount, DueDateSubtitle, WrapperAmount, PayButton, BlurBox } from './styles';

export const DashboardAmount: React.FC = () => {
	return (
		<Wrapper>
			<ValueSubtitle>Débito acumulado</ValueSubtitle>
			<WrapperAmount>
				<MotiView>
					<Skeleton show={true} colorMode={'light'}>
						<Amount>R$00,00</Amount>
					</Skeleton>
				</MotiView>
				{/* */}
				{/* 10 dias para o vencimento */}
				<DueDateSubtitle>Não tem débito 👏</DueDateSubtitle>
			</WrapperAmount>
			<PayButton disabled={true} text={'Pagar'} onPress={() => console.log()} />
		</Wrapper >
	);
}
