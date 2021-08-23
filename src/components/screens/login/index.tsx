import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../contexts/auth_context'
import { LoginService } from '../../../services/login_service'
import { isEmpty } from '../../../utils/extensions/object_extensions'
import { Flash } from '../../../utils/flash'
import { Spinner } from '../../component/spinner'

import {
	Wrapper,
	WelcomeSubtitle,
	Subtitle,
	Username,
	Password,
	ButtonLogin,
	ForgotPasswordTouch,
	ForgotPasswordSubtitle,
} from './styles'

export const LoginScreen: React.FC = () => {
	const { signIn } = useContext(AuthContext)

	const [loadingSpinner, setLoadingSpinner] = useState(false)

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const onLogin = async () => {
		try {
			setLoadingSpinner(true)

			const valid = LoginService.validate({ password: password, mail: login })

			if (!isEmpty(valid)) {
				Flash.incorrectLogin()
				return
			}

			await signIn(login, password)
		} catch (error) {
			Flash.incorrectLogin()
		} finally {
			setLoadingSpinner(false)
		}
	}

	return (
		<Wrapper>
			<Spinner loading={loadingSpinner} />
			<WelcomeSubtitle>Vamos conectar você.</WelcomeSubtitle>
			<Subtitle>Bem-vindo de volta.{'\n'}Sentimos sua falta!</Subtitle>

			<Username value={login} setValue={(e: string) => setLogin(e)} />
			<Password value={password} setValue={(e: string) => setPassword(e)} />

			<ButtonLogin text={'Login'} onPress={() => onLogin()} />

			<ForgotPasswordTouch onPress={() => console.log('OLOCO')}>
				<ForgotPasswordSubtitle>Esqueceu sua senha ?</ForgotPasswordSubtitle>
			</ForgotPasswordTouch>

		</Wrapper>
	)
}
