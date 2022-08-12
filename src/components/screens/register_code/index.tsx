import React, { useState, useEffect, useContext } from 'react'
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field'

import { Wrapper, RegisterButton, Input, Subtitle, Email } from './styles'
import { AuthContext } from '../../../contexts/auth_context'
import { RegisterCodeScreenProps } from '../../../settings/@types/iauth_stack_params'
import { RegisterService } from '../../../services/register-service'
import { Spinner } from '../../component/spinner'
import { IError } from '../../../settings/services/api'
import { Flash } from '../../../utils/flash'
import { Middlewares } from '../../../utils/middlewares'

export const RegisterCodeScreen: React.FC<RegisterCodeScreenProps> = ({ route }) => {
	const { signIn } = useContext(AuthContext)

	const [loadingSpinner, setLoadingSpinner] = useState(false)
	const [code, setCode] = useState<string>('')

	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode as any,
	})

	useEffect(() => {
		try {
			RegisterService.sendRegisterMailCode(route.params.mail)
		} catch (error) { }
	}, [])

	const renderCell = ({ index, symbol, isFocused, }:
		{ index: any, symbol: any, isFocused: any }) => {

		let textChild = null

		if (symbol) {
			textChild = symbol
		} else if (isFocused) {
			textChild = <Cursor />
		}

		return (
			<Input key={index} onLayout={getCellOnLayoutHandler(index)}>
				{textChild}
			</Input>
		)
	}

	async function onRegisterEstablishment() {
		try {

			if (code.length < 5) {
				Flash.customMessage("Digíte um código válido", "")
				return
			}

			setLoadingSpinner(true)

			await RegisterService.register(route.params, code)

			await signIn(route.params.mail, route.params.password)
		} catch (error) {
			Middlewares.middlewareError(() => RegisterService.catchRegister(error as IError), error)
		} finally {
			setLoadingSpinner(false)
		}
	}

	return (
		<Wrapper>
			<Spinner loading={loadingSpinner} />
			<Subtitle>Enviamos um código de 5 dígitos para</Subtitle>
			<Email>{route.params.mail}</Email>

			<CodeField
				value={code}
				onChangeText={(e: any) => setCode(e)}
				cellCount={5}
				keyboardType="default"
				textContentType="oneTimeCode"
				renderCell={renderCell}
				autoFocus={true}
				{...props}
			/>
			<RegisterButton onPress={() => onRegisterEstablishment()} />
		</Wrapper>
	)
}
