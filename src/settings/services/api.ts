import axios from 'axios'
import Constants from 'expo-constants'
import { clearAsyncStorage, getTokenInStorage } from '../../utils/async_storage'
import { isAPIException, keyHasInObjectValidator } from '../../utils/documents_utils'
import { EventEmitter } from '../../utils/emitter'
import { nameof } from '../../utils/extensions/object_extensions'
import { Flash } from '../../utils/flash'

const axiosConfig = {
	baseURL: Constants.manifest?.extra?.API_URL,
}

const api = axios.create(axiosConfig)

api.interceptors.request.use(async (config) => {

	config.timeout = 15000;
	config.baseURL = "http://192.168.1.106:5000/";

	const token = await getTokenInStorage()

	if (token !== null) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

api.interceptors.response.use(
	(response) => {
		return response
	},
	async (error): Promise<{ message: string; error: any; statusCode: number }> => {

		console.log(error)

		if (isAPIException(error)) {
			console.log("ERRO DA API => ", error)
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
		} else {
			console.log("FEZ MERDA => ", error.message)
			Flash.someoneBullshit()
		}

		return Promise.reject(error)
	}
)

export type IResponseMessage<T> = {
	message: T
	statusCode: number
}

export type IError = {
	message: string
	error: { field: string; validation: string }[]
	statusCode: number
}

export default api
