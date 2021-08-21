import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import api, { IResponseMessage } from '../settings/services/api'
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors'
import { Validator } from 'fluentvalidation-ts'
import { ILogin, ILoginResponse } from './interfaces/ilogin'

export class LoginService {
	static async login(mail: string, password: string): Promise<ILoginResponse> {

		const { data } = await api.get<IResponseMessage<ILoginResponse>>('stores/login', {
			auth: {
				username: mail,
				password: password,
			},
		})

		return data.message
	}

	static validate(params: ILogin): ValidationErrors<ILogin> {
		const validator = new LoginValidator()

		return validator.validate(params)
	}
}

class LoginValidator extends Validator<ILogin> {
	constructor() {
		super()

		this.ruleFor('mail').emailAddress().withMessage('Preencha com um e-mail.')

		this.ruleFor('password').minLength(5).withMessage('Senha deve ter no mínimo 5 caracteres')
	}
}
