import AsyncStorage from '@react-native-async-storage/async-storage'
import { ILoginResponse } from '../services/@types/@login-service'

export async function createStoreInStorage(store: ILoginResponse) {
	await AsyncStorage.clear()

	await refreshTokensInStorage(store.token, store.refresh_token);

	await AsyncStorage.setItem('@KLUBBS_STORE:KEY', JSON.stringify(store))
}

export async function clearAsyncStorage() {
	await AsyncStorage.clear()
}

export async function refreshTokensInStorage(token: string, refresh?: string) {
	if (refresh) {
		await AsyncStorage.setItem('@KLUBBS_REFRESH_TOKEN:KEY', refresh)
	}

	await AsyncStorage.setItem('@KLUBBS_TOKEN:KEY', token)
}

export async function mergeStoreInStorage(establishment: ILoginResponse) {
	await AsyncStorage.mergeItem('@KLUBBS_STORE:KEY', JSON.stringify(establishment))
}

export const getTokenInStorage = async (): Promise<string | null> => {
	return await AsyncStorage.getItem('@KLUBBS_TOKEN:KEY')
}

export const getRefreshTokenInStorage = async (): Promise<string | null> => {
	return await AsyncStorage.getItem('@KLUBBS_REFRESH_TOKEN:KEY')
}

export const getStoreInStorage = async (): Promise<ILoginResponse | null> => {
	const result = await AsyncStorage.getItem('@KLUBBS_STORE:KEY')

	if (result === null) {
		return null;
	}

	return JSON.parse(result as any) as ILoginResponse
}
