import { IEstablishmentRegister } from './../components/screens/register/interfaces';
import { isEmpty, nameof } from './../utils/extensions/object_extensions';
import api, { IError, IResponseMessage } from "../settings/services/api";
import { ICategoryResponse, IRegisterRequest } from "./interfaces/iregister";
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { AsyncValidator, Validator } from 'fluentvalidation-ts';
import { beValidCnpj, beValidCpf, keyHasInObjectValidator } from "../utils/documents_utils";
import { Flash } from "../utils/flash";
import { LoginService } from './login_service';

export class RegisterService {

	static async getCategories() {
		const { data } = await api.get<IResponseMessage<ICategoryResponse[]>>('stores/business-category')

		return data.message
	}

	static async register(params: IEstablishmentRegister, code: string): Promise<{ Id: string }> {

		const contractData = this.contract(params, code);

		const { data } = await api.post<IResponseMessage<{ Id: string }>>('stores', contractData);

		return data.message;
	}

	static async sendMailCode(mail: string) {

		await api.post('stores/code/register/mail', null, { params: { mail: mail } })

	}

	static async uploadDocs(cpfImg: any, cnpjImg: any) {

		await api.post()

	}

	static async ValidateProperty<IEstablishmentRegister>(value: any, param: any): Promise<Object> {
		const validator = new RegisterValidator();

		if (param === 'mail' && value === '') {
			return { mail: 'invalid' };
		}

		const errors = await validator.validateAsync(
			{ [param]: value }
		)

		return keyHasInObjectValidator<IEstablishmentRegister>(
			errors,
			param as keyof IEstablishmentRegister
		)
	}

	static contract(params: IEstablishmentRegister, code: string): IRegisterRequest {
		return {
			name: params.name,
			password: params.password,
			description: params.description,
			owner_name: params.ownerName,
			business_category_id: params.businessCategoryId,
			mail: params.mail,
			cnpj: params.cnpj.replace(/\D/g, ""),
			owner_cpf: params.ownerCpf.replace(/\D/g, ""),
			phone: params.phone.replace(/\D/g, ""),
			code: code,
			closed_at: params.closedAt.ToUnixEpoch(),
			opened_at: params.openedAt.ToUnixEpoch(),
			latitude: params.lat,
			longitude: params.long
		}
	}


	static catchRegister(error: IError) {

		switch (error.statusCode) {
			case 412:
				Flash.invalidCode();
				return;
			case 409:

				error.error.forEach(element => {
					if (element.field.toUpperCase() === "MAIL")
						Flash.customConflict("E-mail")
					else if (element.field.toUpperCase() === "CNPJ")
						Flash.customConflict("Cnpj")
					return;
				});

			default:
				Flash.someoneBullshit();
				return;
		}
	}


}

class RegisterValidator extends AsyncValidator<IEstablishmentRegister> {
	constructor() {
		super();

		this.ruleFor('name')
			.notEmpty()
			.withMessage('Preencha o nome do estabelecimento.')
			.when(src => src.name !== undefined)

		this.ruleFor('mail')
			.emailAddress()
			.withMessage('Preencha com um e-mail.')
			.when(src => src.mail !== undefined)

		this.ruleFor('mail')
			.mustAsync(async (mail: string) => {
				try {
					const already = await LoginService.AlreadyMail(mail)

					return !already
				} catch (error) {
					return false
				}
			})
			.withMessage('E-mail inválido.')
			.when(src => src.mail !== undefined)

		this.ruleFor('ownerName')
			.notEmpty()
			.withMessage('Preencha com o nome do responsável.')
			.when(src => src.ownerName !== undefined)

		this.ruleFor('closedAt')
			.notNull()
			.when(src => src.closedAt !== undefined)

		this.ruleFor('openedAt')
			.notNull()
			.when(src => src.openedAt !== undefined)

		this.ruleFor('description')
			.notEmpty()
			.minLength(10)
			.withMessage('Detalhe um pouco mais seu estabelecimento.')
			.when(src => src.description !== undefined)

		this.ruleFor('businessCategoryId')
			.mustAsync(async (ctg: string) => {
				const categories = await RegisterService.getCategories();
				return categories.some(item => item.id === ctg)
			})
			.notNull()
			.notEmpty()
			.when(src => src.businessCategoryId !== undefined)

		this.ruleFor('ownerCpf')
			.notEmpty()
			.must(beValidCpf)
			.withMessage('Preencha com um CPF válido.')
			.when(src => src.ownerCpf !== undefined)

		this.ruleFor('cnpj')
			.notEmpty()
			.must(beValidCnpj)
			.withMessage('Preencha com um CNPJ válido.')
			.when(src => src.cnpj !== undefined)

		this.ruleFor('password')
			.minLength(5)
			.withMessage('Senha deve ter no mínimo 5 caracteres')
			.when(src => src.password !== undefined)

		this.ruleFor('phone')
			.notEmpty()
			.matches(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/))
			.withMessage('Preencha com um telefone válido.')
			.when(src => src.phone !== undefined)

		this.ruleFor('lat')
			.must(src => src !== 0)
			.when(src => src.lat !== undefined)

		this.ruleFor('long')
			.must(src => src !== 0)
			.when(src => src.long !== undefined)

	}
}
