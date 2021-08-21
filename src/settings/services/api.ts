import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Constants from 'expo-constants'
import { getTokenInStorage } from '../../utils/async_storage'

const axiosConfig = {
    baseURL: Constants.manifest?.extra?.ENVIRONMENT_API_URL,
}

const api = axios.create(axiosConfig)

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
    (error): Promise<{ message: string; error: any; statusCode: number }> => {
        console.log('########################################################')

        console.error(error)

        console.log('########################################################')

        const statusCode = error.response.data?.statusCode

        const validationError = error.response.data?.error
        const message = error.response.data?.message

        return Promise.reject({
            message,
            error: validationError,
            statusCode: Number(statusCode),
        })
    }
)

export type IResponseMessage<T> = {
    message: T
    statusCode: number
}

export type IError = {
    message: string
    error: { Field: string; Validation: string }[]
    statusCode: number
}

export default api
