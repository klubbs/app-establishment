import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import api, { IError, IResponseMessage } from '../settings/services/api'
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors'
import { Validator } from 'fluentvalidation-ts'
import { ILogin, ILoginResponse } from './@types/loginTypes'
import { keyHasInObjectValidator } from '../utils/documents_utils'
import { Flash } from '../utils/flash'

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

	static async sendForgetPasswordCode(mail: string) {
		await api.post('stores/code/forget/mail', null, { params: { mail: mail } })
	}

	static async updatePassword(mail: string, password: string, code: string) {
		await api.put('stores/update/password', { code: code, mail: mail, password: password })
	}

	static validateLogin(params: ILogin): ValidationErrors<ILogin> {
		const validator = new LoginValidator()

		return validator.validate(params)
	}
	static ValidateProperty(value: any, param: keyof ILogin): Object {
		const validator = new LoginValidator();

		const errors = validator.validate({ [param]: value })

		return keyHasInObjectValidator<ILogin>(errors, param as keyof ILogin)
	}

	static async MailAlreadyInUse(mail: string): Promise<boolean> {

		const { data } = await api.get<IResponseMessage<boolean>>('stores/validate/mail', {
			params: { mail: mail }
		})

		return data.message;
	}

	static async CnpjAlreadyInUse(cnpj: string): Promise<boolean> {
		const { data } = await api.get<IResponseMessage<boolean>>('stores/validate/cnpj', {
			params: { cnpj: cnpj }
		})

		return data.message;
	}

}

export class LoginServiceException {

	static catchUpdatePassword(error: IError) {

		const actual = error.error[0].field.toUpperCase();

		switch (error.statusCode) {
			case 412:

				if (actual === 'DENIED') {
					Flash.invalidCode()
				}

				break;

			default:
				break;
		}

	}

}

class LoginValidator extends Validator<ILogin> {
	constructor() {
		super()

		this.ruleFor('mail')
			.emailAddress()
			.withMessage('Preencha com um e-mail.')
			.when(src => src.mail !== undefined)

		this
			.ruleFor('password')
			.minLength(5)
			.withMessage('Senha deve ter no mínimo 5 caracteres')
			.when(src => src.password !== undefined)
	}
}
