import React, { useState, useEffect, useContext } from 'react'
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field'

import { Wrapper, RegisterButton, Input, Subtitle, Email } from './styles'
import { AuthContext } from '../../../contexts/auth_context'
import { ForgetMailScreenProps } from '../../../settings/@types/iauth_stack_params'
import { Spinner } from '../../component/spinner'
import { Flash } from '../../../utils/flash'
import { LoginService } from '../../../services/login_service'

export const ForgetMailScreen: React.FC<ForgetMailScreenProps> = ({ route }) => {
	const { signIn } = useContext(AuthContext)

	const [loadingSpinner, setLoadingSpinner] = useState(false)
	const [code, setCode] = useState<string>('')

	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode as any,
	})

	useEffect(() => {
		try {
			LoginService.sendForgetMailCode(route.params.mail)
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

	const onValidateCode = async () => {
		try {

			if (code.length < 5) {
				Flash.customMessage("Digíte um código válido", "")
				return
			}

			console.log(route.params.mail)
			setLoadingSpinner(true)

			//TODO
			// LoginService.updatePassword(route.params.mail, '')

		} catch (error) {

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
			<RegisterButton onPress={onValidateCode} />
		</Wrapper>
	)
}
