import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { CVCCardInput, CreditCardNumber, DateCardInput, NameUserInput } from './styles';

// import { Container } from './styles';

const PaymentsScreen: React.FC = () => {
	const [userNameCard, setUserNameCard] = useState('')
	const [date, setDate] = useState('')
	const [cvc, setCvc] = useState('')


	return (
		<View style={{ flex: 1, padding: 10 }} >
			<View style={{ flex: 1 }}>
			</View>
			<View style={{ alignItems: 'center', flex: 1, rowGap: 10, justifyContent: 'center' }}>
				<NameUserInput
					value={userNameCard}
					setValue={setUserNameCard}
				/>
				<CreditCardNumber />
				<View style={{ flexDirection: 'row', columnGap: 10 }}>
					<DateCardInput
						value={date}
						setValue={setDate}
					/>
					<CVCCardInput
						value={cvc}
						setValue={setCvc}
					/>
				</View>
			</View>
		</View>
	);
}

export { PaymentsScreen }
