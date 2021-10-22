import React, { useState, useContext } from 'react'
import { Alert } from 'react-native'
import { AuthContext } from '../../../contexts/auth_context'
import { LoginService } from '../../../services/login_service'
import { isEmpty } from '../../../utils/extensions/object_extensions'
import { Flash } from '../../../utils/flash'
import { Spinner } from '../../component/spinner'
import { useNavigation } from '@react-navigation/native';
import { isAPIException } from '../../../utils/documents_utils'
import {
	Wrapper,
	WelcomeSubtitle,
	Subtitle,
	Username,
	Password,
	ButtonLogin,
	ForgotPasswordTouch,
	ForgotPasswordSubtitle,
	Container,
	KeyboardContainer
} from './styles'
import { Middlewares } from '../../../utils/middlewares'

export const LoginScreen: React.FC = () => {
	const { signIn } = useContext(AuthContext)

	const navigation = useNavigation();
	const [loadingSpinner, setLoadingSpinner] = useState(false)

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	async function handleLogin() {
		try {
			setLoadingSpinner(true)

			const valid = LoginService.validateLogin({ password: password, mail: login })

			if (!isEmpty(valid)) {
				Flash.incorrectLogin()
				return
			}

			await signIn(login, password)
		} catch (error) {
			Middlewares.middlewareError(() => Flash.incorrectLogin(), error)

		} finally { setLoadingSpinner(false) }
	}

	function handleForgetPassword() {

		const error = LoginService.ValidateProperty(login, 'mail')
		if (!isEmpty(error)) {
			Flash.customMessage('preencha um email antes', "Coloque o email para recuperação", 'NEUTRAL'
			)
			return
		}

		Alert.alert(
			"Gostaria de recuperar sua senha?",
			`Iremos enviar um código para : ${login}`,
			[
				{
					text: 'Sim',
					onPress: () => navigation.navigate('ForgetPassword', { mail: login })
				},
				{
					text: 'Não',
					onPress: () => { },
					style: 'cancel'
				}
			]
		);
	}

	return (
		<Wrapper>
			<Spinner loading={loadingSpinner} />
			<Container>
				<WelcomeSubtitle>Vamos conectar você.</WelcomeSubtitle>
				<Subtitle>Bem-vindo de volta.{'\n'}Sentimos sua falta!</Subtitle>
			</Container>
			<KeyboardContainer>
				<Container>
					<Username value={login} setValue={(e: string) => setLogin(e.trim())} />
					<Password value={password} setValue={(e: string) => setPassword(e)} />
				</Container>
			</KeyboardContainer>
			<Container>
				<ButtonLogin text={'Login'} onPress={handleLogin} />

				<ForgotPasswordTouch onPress={handleForgetPassword} >
					<ForgotPasswordSubtitle>Esqueceu sua senha ?</ForgotPasswordSubtitle>
				</ForgotPasswordTouch>
			</Container>
		</Wrapper>
	)
}
