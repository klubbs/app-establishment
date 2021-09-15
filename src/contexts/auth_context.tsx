import React, { createContext, useState, useEffect } from 'react'
import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import { RegisterService } from '../services/register_service'
import { LoginService } from '../services/login_service'
import { createEstablishmentInStorage, clearAsyncStorage, getEstablishmentInStorage }
	from '../utils/async_storage'
import * as SplashScreen from 'expo-splash-screen';
import { ILoginResponse } from '../services/interfaces/ilogin'

export const AuthContext = createContext(
	{} as {
		establishment: ILoginResponse | null
		signIn: (mail: string, password: string) => Promise<void>
		register: (params: IEstablishmentRegister, code: string) => Promise<void>
		logout: () => Promise<void>
		reloadProfile: () => Promise<void>
	}
)

const AuthProvider: React.FC = ({ children }) => {
	const [establishment, setEstablishment] = useState<ILoginResponse | null>(null)

	useEffect(() => {
		(
			async function preventReloadProfile() {
				reloadProfile()

				await SplashScreen.hideAsync();
			})()
	}, [])

	const signIn = async (mail: string, password: string) => {
		const establishment = await LoginService.login(mail, password)

		await createEstablishmentInStorage(establishment)

		setEstablishment(establishment)
	}

	const register = async (params: IEstablishmentRegister, code: string): Promise<void> => {
		await RegisterService.register(params, code)
	}

	const logout = async () => {
		await clearAsyncStorage()
		setEstablishment(null)
	}

	async function reloadProfile() {
		const response = await getEstablishmentInStorage()

		if (response) {
			setEstablishment(response)
		}
	}

	return (
		<AuthContext.Provider value={{ establishment, signIn, register, logout, reloadProfile }}>{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
