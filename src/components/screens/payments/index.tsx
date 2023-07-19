import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { CVCCardInput, CreditCardNumber, DateCardInput, NameUserInput } from './styles';

// import { Container } from './styles';

const PaymentsScreen: React.FC = () => {
	const [userNameCard, setUserNameCard] = useState('')


	return (
		<View style={{ flex: 1, padding: 10 }} >
			<View style={{ flex: 1 }}>
			</View>
			<View style={{ alignItems: 'center', flex: 5 }}>
				<NameUserInput
					value={userNameCard}
					setValue={setUserNameCard}
				/>
				<CreditCardNumber />
				<View style={{ flexDirection: 'row' }}>
					<DateCardInput />
					<CVCCardInput />
				</View>
			</View>
		</View>
	);
}

export { PaymentsScreen }
