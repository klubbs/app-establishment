import React, { useState, useEffect, useContext, useRef } from 'react'
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { useNavigation } from '@react-navigation/native';
import {
	Wrapper,
	ConfirmButton,
	Input,
	Subtitle,
	Email,
	Password,
	ContainerAnimated
} from './styles'
import { AuthContext } from '../../../contexts/auth_context'
import { ForgetPasswordScreenProps } from '../../../settings/@types/iauth_stack_params'
import { Spinner } from '../../component/spinner'
import { Flash } from '../../../utils/flash'
import { LoginService } from '../../../services/login_service'
import { IError } from '../../../settings/services/api'
import { isEmpty } from '../../../utils/extensions/object_extensions';
import { isAPIException } from '../../../utils/documents_utils';
import { Middlewares } from '../../../utils/middlewares';

export const ForgetPasswordScreen: React.FC<ForgetPasswordScreenProps> = ({ route }) => {

	const { signIn } = useContext(AuthContext)

	const [loadingSpinner, setLoadingSpinner] = useState(false)
	const [code, setCode] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const navigation = useNavigation();

	const [activePassword, setActivePassword] = useState(false)
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode as any,
	})

	useEffect(() => {
		try {
			LoginService.sendForgetPasswordCode(route.params.mail)
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

	function handleCode() {
		if (code.length < 5) {
			Flash.customMessage("Código inválido", "")
			return
		}

		if (!activePassword) {
			setActivePassword(true)
		}
	}

	async function handleChangePassword() {

		try {

			setLoadingSpinner(true)

			const valid = LoginService.ValidateProperty(password, 'password');

			if (!isEmpty(valid)) {
				Flash.customMessage("Necessário ao menos 5 caracteres", 'Senha inválida', 'NEUTRAL')
				return
			}

			await LoginService.updatePassword(route.params.mail, password, code)

			Flash.customMessage("Senha alterada com sucesso", "", "SUCCESS")

			navigation.goBack()

		} catch (error) {
			Middlewares.middlewareError(() => {
				if (isAPIException(error)) {
					const actual = error as IError
					const actualFieldError = actual.error[0].field.toUpperCase()

					switch (actual.statusCode) {
						case 412:
							if (actualFieldError === 'DENIED') {
								Flash.invalidCode()
								setActivePassword(false)
							}
							break;

						case 409:
							if (actualFieldError === 'ESTABLISHMENT') {
								Flash.customMessage("Esse email não faz parte do nosso cadastro",
									"Desculpe",
									"NEUTRAL"
								)
							}
							break;

						default:
							break;
					}
				}
			}, error)

		} finally { setLoadingSpinner(false) }
	}


	return (
		<Wrapper>
			<Spinner loading={loadingSpinner} />
			<Subtitle>Enviamos um código de 5 dígitos para</Subtitle>
			<Email>{route.params.mail}</Email>


			{!activePassword && <ContainerAnimated>
				<CodeField
					value={code}
					onChangeText={(e: any) => setCode(e.trim())}
					cellCount={5}
					keyboardType="default"
					textContentType="oneTimeCode"
					renderCell={renderCell}
					autoFocus={true}
					{...props}
				/>
			</ContainerAnimated>
			}

			{activePassword && <ContainerAnimated>
				<Password
					value={password}
					setValue={(e: string) => setPassword(e.trim())}
				/>
			</ContainerAnimated>
			}
			<ConfirmButton
				text={activePassword ? 'Validar' : 'Próximo'}
				onPress={() => activePassword ? handleChangePassword() : handleCode()} />
		</Wrapper>
	)
}
