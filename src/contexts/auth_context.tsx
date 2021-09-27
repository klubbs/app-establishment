import React, { createContext, useState, useEffect } from 'react'
import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import { RegisterService } from '../services/register_service'
import { LoginService } from '../services/login_service'
import {
	createEstablishmentInStorage,
	clearAsyncStorage,
	getEstablishmentInStorage,
	mergeEstablishmentInStorage
} from '../utils/async_storage'
import * as SplashScreen from 'expo-splash-screen';
import { ILoginResponse } from '../services/@types/loginTypes'
import { EventEmitter } from '../utils/emitter'
import { ProfileService } from '../services/profileService'
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
		try {

			const response = await getEstablishmentInStorage()

			setEstablishment(response)
		} catch (error) {
			Flash.someoneBullshit()
		}
	}

	async function reloadProfileInCloud() {
		const response = await ProfileService.getEstablishment();

		const actualResponse = await getEstablishmentInStorage()

		if (response) {
			//O objeto de recuperacao de usuario não envia token, por isso ele vem como null
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
