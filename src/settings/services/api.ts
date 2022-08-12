import axios from 'axios'
import Constants from 'expo-constants'
import { getEstablishmentInStorage, getRefreshTokenInStorage, getTokenInStorage } from '../../utils/async_storage'
import { isAPIException } from '../../utils/documents_utils'
import { EventEmitter } from '../../utils/emitter'
import { Flash } from '../../utils/flash'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { AuthService } from '../../services/auth-service'


export const connectionHandler = (type: 'KLUBBS_AUTHZN_URL' | 'KLUBBS_API_URL') => {
	const url = {
		'KLUBBS_AUTHZN_URL': Constants.manifest?.extra?.KLUBBS_AUTHZN_URL,
		'KLUBBS_API_URL': Constants.manifest?.extra?.KLUBBS_API_URL
	}

	const instance = axios.create({
		baseURL: url[type],
		timeout: 20000
	})

	if (type !== 'KLUBBS_AUTHZN_URL') {
		instance.interceptors.request.use(async (config) => {

			let token = await getTokenInStorage();

			if (!token) {

				token = await AuthService.generateAppCredential()

				config.headers.Authorization = `Bearer ${token}`

				return config
			}

			const isEpired = jwt_decode<JwtPayload>(token).exp as number * 1000 < Date.now()

			if (isEpired) {
				const store = await getEstablishmentInStorage()

				if (store) {
					const refresh = await getRefreshTokenInStorage() || ''

					token = await AuthService.refresh(token, refresh);
				} else {
					token = await AuthService.generateAppCredential()
				}
			}

			config.headers.Authorization = `Bearer ${token}`

			return config
		})
	}

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		async (error): Promise<{ message: string; error: any; statusCode: number }> => {
			if (isAPIException(error?.response?.data)) {
				// console.log("ERRO DA API => ", error.response.data)
				const statusCode = error.response.data?.statusCode

				const validationError = error.response.data?.error
				const message = error.response.data?.message

				switch (statusCode) {
					case 401:
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

export type IResponseMessage<T> = {
	message: T
	statusCode: number
}

export type IError = {
	message: string
	error: { field: string; validation: string }[]
	statusCode: number
}
