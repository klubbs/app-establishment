import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { CVCCardInput, CardBackground, CardTexts, CreditCardNumber, DateCardInput, NameUserInput, SaveButton } from './styles';
// import { Container } from './styles';

const PaymentsScreen: React.FC = () => {

	const [userNameCard, setUserNameCard] = useState('Adonis Antunes Uessler')
	const [creditCardNumber, setCreditCardNumber] = useState('5214330298188709')
	const [date, setDate] = useState('2406')
	const [cvc, setCvc] = useState('367')

	const [editable, setEditable] = useState(false)

	const BUTTON_TEXT = editable ? 'SALVAR' : 'ALTERAR CARTÃO'
	const PLACEHOLDER_NAME = editable ? userNameCard : userNameCard.replace(/[a-zA-Z0-9]/g, '*')
	const PLACEHOLDER_DATE = editable ? date : '** / **'
	const PLACEHOLDER_CVC = editable ? cvc : '***'
	const PLACEHOLDER_NUMBER = editable ? creditCardNumber : creditCardNumber.slice(-4)

	function handleSave() {
		//will convert just in next render
		setEditable(!editable)

		if (!editable) {
			setUserNameCard('')
			setCreditCardNumber('')
			setDate('')
			setCvc('')
			return
		}


	}

	function showWhenMoreThan12() {
		if (creditCardNumber.length > 17) {
			return creditCardNumber.slice(-4)
		}

		return ''
	}

	return (
		<View style={{ flex: 1, padding: 10 }} >
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<CardBackground>
					<CardTexts>●●●● ●●●● ●●●● {showWhenMoreThan12()}</CardTexts>
					<CardTexts>	CARTÃO DE CRÉDITO</CardTexts>
				</CardBackground>
			</View>
			<KeyboardAvoidingView behavior={'padding'} style={{
				alignItems: 'center', flex: 1, rowGap: 10, justifyContent: 'center'
			}}>
				<SaveButton onPress={handleSave} text={BUTTON_TEXT} enable={editable} />
				<NameUserInput
					editable={editable}
					value={PLACEHOLDER_NAME}
					setValue={setUserNameCard}
				/>
				<CreditCardNumber
					editable={editable}
					value={PLACEHOLDER_NUMBER}
					onChangeText={setCreditCardNumber} />
				<View style={{ flexDirection: 'row', columnGap: 10 }}>
					<DateCardInput
						editable={editable}
						value={PLACEHOLDER_DATE}
						setValue={setDate}
					/>
					<CVCCardInput
						editable={editable}
						value={PLACEHOLDER_CVC}
						setValue={setCvc}
					/>
				</View>
			</KeyboardAvoidingView>
		</View >
	);
}

export { PaymentsScreen }
