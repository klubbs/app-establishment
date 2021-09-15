import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'
import { ILoginResponse } from '../services/interfaces/ilogin'

export async function createEstablishmentInStorage(establishment: ILoginResponse) {
	await AsyncStorage.clear()

	await AsyncStorage.multiSet([
		['@TOKEN:Key', establishment.token],
		['@ESTABLISHMENT:Key', JSON.stringify(establishment)],
	])
}

export async function clearAsyncStorage() {
	await AsyncStorage.clear()
}

export async function mergeEstablishmentInStorage(establishment: ILoginResponse) {
	await AsyncStorage.mergeItem('@ESTABLISHMENT:Key', JSON.stringify(establishment))
}

export const getTokenInStorage = async (): Promise<string | null> => {
	return await AsyncStorage.getItem('@TOKEN:Key')
}

export const getEstablishmentInStorage = async (): Promise<ILoginResponse | null> => {
	const result = await AsyncStorage.getItem('@ESTABLISHMENT:Key')

	if (result === null) {
		return null;
	}

	return JSON.parse(result as any) as ILoginResponse
}
