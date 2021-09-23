import axios from 'axios'
import Constants from 'expo-constants'
import { getTokenInStorage } from '../../utils/async_storage'
import { isAPIException } from '../../utils/documents_utils'
import { EventEmitter } from '../../utils/emitter'
import { Flash } from '../../utils/flash'

const axiosConfig = {
	baseURL: Constants.manifest?.extra?.API_URL,
}

const api = axios.create(axiosConfig)

api.interceptors.request.use(async (config) => {

	config.timeout = 20000;

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
		} else {
			// console.log("FEZ MERDA => ", error.message)
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
