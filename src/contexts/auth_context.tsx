import React, { createContext, useState, useEffect } from 'react'
import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import { RegisterService } from '../services/register-service'
import { LoginService } from '../services/login-service'
import {
	createEstablishmentInStorage,
	clearAsyncStorage,
	getEstablishmentInStorage,
	mergeEstablishmentInStorage
} from '../utils/async_storage'
import * as SplashScreen from 'expo-splash-screen';
import { ILoginResponse } from '../services/@types/@login-service'
import { EventEmitter } from '../utils/emitter'
import { ProfileService } from '../services/profile-service'
import { Flash } from '../utils/flash'

export const AuthContext = createContext(
	{} as {
		establishment: ILoginResponse | null
		signIn: (mail: string, password: string) => Promise<void>
		register: (params: IEstablishmentRegister, code: string) => Promise<void>
		logout: () => Promise<void>
		reloadProfile: () => Promise<void>
		reloadProfileInCloud: () => Promise<void>
	}
)

const AuthProvider: React.FC = ({ children }) => {
	const [establishment, setEstablishment] = useState<ILoginResponse | null>(null)

	useEffect(() => {
		(
			async function preventReloadProfile() {
				await reloadProfile()

				await SplashScreen.hideAsync();
			})()

		EventEmitter.listen('LOGOUT', function () { logout() })
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

		setEstablishment(response)
	}

	async function reloadProfileInCloud() {
		const response = await ProfileService.getEstablishment();

		const actualResponse = await getEstablishmentInStorage()

		if (response) {
			//Utilizamos o mesmo TYPES de loginResponse para esse caso de consulta,como recuperação
			//não de estabelecimento não envia token sobrescrevemos ele aqui
			response.token = actualResponse?.token as string;

			await mergeEstablishmentInStorage(response)
			setEstablishment(response);
		}
	}

	return (
		<AuthContext.Provider value={{
			establishment, signIn, register, logout,
			reloadProfile, reloadProfileInCloud
		}}>{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
