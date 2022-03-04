import axios from 'axios'
import Constants from 'expo-constants'
import { getTokenInStorage } from '../../utils/async_storage'
import { isAPIException } from '../../utils/documents_utils'
import { EventEmitter } from '../../utils/emitter'
import { Flash } from '../../utils/flash'

const api = axios.create({
	baseURL: Constants.manifest?.extra?.API_URL,
	timeout: 20000

})

api.interceptors.request.use(async (config) => {
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
