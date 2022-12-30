import axios from 'axios'
import Constants from 'expo-constants'
import { isAPIException } from '../utils/documents_utils'
import { EventEmitter } from '../utils/emitter'
import { Flash } from '../utils/flash'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { AuthService } from '../services/auth-service'
import {
	getStoreInStorage,
	getRefreshTokenInStorage,
	getTokenInStorage
} from '../utils/async_storage'

const URL = {
	'KLUBBS_AUTHZN_URL': Constants.manifest?.extra?.KLUBBS_AUTHZN_URL,
	'KLUBBS_API_URL': Constants.manifest?.extra?.KLUBBS_API_URL
}

export const createInstanceAuthZn = axios.create({
	baseURL: URL['KLUBBS_AUTHZN_URL'],
	timeout: 20000
})

export const connectionHandler = (type: 'KLUBBS_API_URL') => {

	const instance = axios.create({
		baseURL: URL[type],
		timeout: 20000
	})

	instance.interceptors.request.use(async (config) => {

		const token = await createCredentialToken()

		config.headers.Authorization = `Bearer ${token}`

		return config
	})


	instance.interceptors.response.use(
		(response) => response,
		async (error): Promise<{ message: string; error: any; statusCode: number }> => {
			
				console.log(error)
			if (isAPIException(error?.response?.data)) {
				// console.log("ERRO DA API => ", error.response.data)
				const statusCode = error.response.data?.statusCode

				const validationError = error.response.data?.error
				const message = error.response.data?.message

				switch (statusCode) {
					case 403:
						EventEmitter.emit('LOGOUT', {});
						break;

					case 500:
						Flash.spillCoffee();
						break;

					default:
						break;
				}

				return Promise.reject({
					message,
					error: validationError,
					statusCode: Number(statusCode),
				})
			} else if (!error.status) {
				//Network error
				Flash.dogsOut()
			} else {
				Flash.someoneBullshit()
			}

			return Promise.reject({})
		}
	)

	return instance
}


async function createCredentialToken() {

	let token = await getTokenInStorage();

	if (!token) {
		return await AuthService.generateAppCredential()
	}

	const isExpired = jwt_decode<JwtPayload>(token).exp as number * 1000 < Date.now()

	if (!isExpired) {
		return token;
	}

	const store = await getStoreInStorage()

	if (!store) {
		return await AuthService.generateAppCredential()
	}

	const refresh = await getRefreshTokenInStorage() || ''

	return await AuthService.refresh(token, refresh)
}

export type IResponseMessage<T> = {
	message: T
	statusCode: number
}

export type IError = {
	message: string
	error: { field: string; validation: string }[]
	statusCode: number
}
