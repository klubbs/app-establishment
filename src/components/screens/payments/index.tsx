import React, { useContext, useEffect, useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { CVCCardInput, CardBackground, CardTexts, CreditCardNumber, DateCardInput, NameUserInput, SaveButton } from './styles';
import { FinanceService } from '../../../services/finance-service';
import { Flash } from '../../../utils/flash';
import { Spinner } from '../../component/spinner';
import { Middlewares } from '../../../utils/middlewares';
import { IError } from '../../../settings/connection';
import { AuthContext } from '../../../contexts/auth-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IAppStackParams } from '../../../settings/@types/iapp-stack-params';

const PaymentsScreen: React.FC = () => {

	const navigation = useNavigation<StackNavigationProp<IAppStackParams>>();

	const { establishment } = useContext(AuthContext)

	const [userNameCard, setUserNameCard] = useState('')
	const [creditCardNumber, setCreditCardNumber] = useState('')
	const [date, setDate] = useState('')
	const [cvc, setCvc] = useState('')
	const [loading, setLoading] = useState(false)

	const [editable, setEditable] = useState(false)

	const BUTTON_TEXT = editable ? 'SALVAR' : 'ALTERAR CARTÃO'
	const PLACEHOLDER_NAME = editable ? userNameCard : userNameCard.replace(/[a-zA-Z0-9]/g, '*')
	const PLACEHOLDER_CVC = editable ? cvc : '***'
	const PLACEHOLDER_NUMBER = editable ? creditCardNumber : creditCardNumber.slice(-4)

	if (establishment?.documentation_status !== "OK") {
		navigation.goBack()
		Flash.customMessage(
			"Etapa de documentação ainda não foi concluida",
			"Documentação",
			"NEUTRAL"
		)
		return
	}


	useEffect(() => {
		GetStoredPaymentMethod()
	}, [])

	async function GetStoredPaymentMethod() {
		try {
			setLoading(true)

			const creditCardData = await FinanceService.GetPaymentMethod()

			if (creditCardData) {
				setCreditCardNumber(creditCardData.last_4.toString());
				formatToMMYY(`${creditCardData
					.exp_month
					.toString()
					.padStart(2, '0')}${creditCardData.exp_year}`)
				setUserNameCard("***** *****")
				return
			}

			Flash.customMessage('Nenhum meio de pagamento cadastrado', "Cadastre seu cartão de crédito", 'NEUTRAL')

		} catch (error) {

			Middlewares.middlewareError(
				() => FinanceService.catchGetPaymentMethod(error as IError),
				error
			)

		} finally {
			setLoading(false)
		}
	}

	async function handleSave() {
		if (!editable) {
			setEditable(!editable)
			setCvc('')
			setUserNameCard('')
			setCreditCardNumber('')
			setDate('')
			return
		}

		const contract = {
			exp_year: date.replace('/', '').substring(2),
			exp_month: date.replace('/', '').substring(0, 2),
			cardNumber: creditCardNumber.replaceAll(' ', ''),
			cvv: cvc,
			holderName: userNameCard
		}

		if (
			contract.exp_year.length != 2 ||
			contract.exp_month.length != 2 ||
			contract.cardNumber.length != 16 ||
			contract.holderName.length < 3 ||
			contract.cvv.length != 3
		) {
			Flash.customMessage('Os dados preenchidos estão inválidos', 'Preencha os dados corretamente', 'WARNING')

			return;
		}


		try {
			setLoading(true)

			await FinanceService.UpdatePaymentMethod(contract)

			Flash.customMessage(
				"Meio de pagamento atualizado com sucesso",
				"Cartão atualizado",
				'SUCCESS')

			setEditable(!editable)

		} catch (error) {
			Middlewares.middlewareError(
				() => FinanceService.catchUpdatePaymentMethod(error as IError),
				error
			)
		} finally {
			setLoading(false)
		}
	}

	function showWhenMoreThan12() {
		if (creditCardNumber.length > 17) {
			return creditCardNumber.slice(-4)
		}

		if (!editable) {
			return creditCardNumber
		}

		return ''
	}

	function formatToCvc(number: string) {
		if (number.toString().length > 3) {
			return
		}

		setCvc(number)
	}

	function formatToMMYY(number: string) {
		number = number.replace('/', '')

		if (number.toString().length > 4) {
			return
		}

		if (number.toString().length !== 4) {
			setDate(number);
			return
		}
		const month = number.toString().substring(0, 2);
		const year = number.toString().substring(2);

		if (Number(month) > 12) {
			Flash.customMessage('O mês esta com um valor inválido', 'Mês inválido', 'NEUTRAL')
			return
		}

		setDate(`${month}/${year}`)
	}

	return (
		<View style={{ flex: 1, padding: 10 }} >
			<Spinner loading={loading} />
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
						value={date}
						setValue={formatToMMYY}
					/>
					<CVCCardInput
						editable={editable}
						value={PLACEHOLDER_CVC}
						setValue={formatToCvc}
					/>
				</View>
			</KeyboardAvoidingView>
		</View >
	);
}

export { PaymentsScreen }
