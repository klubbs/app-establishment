import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IAuthStackParams } from '../@types/iauth-stack-params'
import { WelcomeScreen } from '../../components/screens/welcome'
import { RegisterScreen } from '../../components/screens/register'
import colors from '../../../assets/constants/colors'
import { ContractScreen } from '../../components/screens/contract'
import { RegisterCodeScreen } from '../../components/screens/register-code'
import { LoginScreen } from '../../components/screens/login'
import { ForgetPasswordScreen } from '../../components/screens/forget-password'

const AuthStack = createStackNavigator<IAuthStackParams>()

export const AuthStackNavigator: React.FC<{}> = () => {
	return (
		<AuthStack.Navigator
			screenOptions={({ navigation, route }) => ({
				headerTransparent: true,
				headerBackTitleVisible: false,
				headerTitleStyle: { color: 'transparent', fontFamily: 'Nunito_Light' },
				headerTintColor: colors.COLOR_WHITE,
			})}>
			<AuthStack.Screen name="Welcome" component={WelcomeScreen} />
			<AuthStack.Screen
				name="Register"
				component={RegisterScreen}
				options={{
					headerTitle: 'Abertura de conta',
					headerTitleStyle: styleHeader,
				}}
			/>
			<AuthStack.Screen
				name="Contract"
				component={ContractScreen}
				options={{
					headerTitle: 'Termos e serviços',
					headerTitleStyle: styleHeader,
				}}
			/>
			<AuthStack.Screen
				name="RegisterCode"
				component={RegisterCodeScreen}
				options={{
					headerTitle: 'Verificar e-mail',
					headerTitleStyle: styleHeader,
				}}
			/>
			<AuthStack.Screen
				name="ForgetPassword"
				component={ForgetPasswordScreen}
				options={{
					headerTitle: 'Recuperar e-mail',
					headerTitleStyle: styleHeader,
				}}
			/>
			<AuthStack.Screen name="Login" component={LoginScreen} options={{}} />
		</AuthStack.Navigator>
	)
}

const styleHeader = { color: colors.COLOR_WHITE_80, fontFamily: 'Nunito_Light' }
