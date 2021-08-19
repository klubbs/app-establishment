import { IEstablishmentRegister } from "../components/screens/register/interfaces";
import api, { IError } from "../settings/services/api";
import { IRegisterRequest } from "./interfaces/iregister";
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { Validator } from 'fluentvalidation-ts';
import { beValidCnpj, beValidCpf } from "../utils/documents_utils";
import { Flash } from "../utils/flash";

export class RegisterService {


    static async register(params: IEstablishmentRegister, code: string): Promise<{ Id: string }> {

        const contractData = this.contract(params, code);

        const { data } = await api.post<{ Id: string }>('stores', contractData);

        return data;
    }

    static async sendMailCode(mail: string) {

        await api.post('stores/code/register/mail', null, { params: { mail: mail } })

    }

    static validate(params: IEstablishmentRegister): ValidationErrors<IEstablishmentRegister> {

        const validator = new RegisterValidator();

        return validator.validate(params)
    }

    static contract(params: IEstablishmentRegister, code: string): IRegisterRequest {
        return {
            name: params.name,
            password: params.password,
            description: params.description,
            owner_name: params.ownerName,
            establishment_model_business_id: params.modelBusinessId,
            mail: params.mail,
            cnpj: params.cnpj.replace(/\D/g, ""),
            owner_cpf: params.ownerCpf.replace(/\D/g, ""),
            phone: params.phone.replace(/\D/g, ""),
            code: code,
            closed_at: params.closedAt.ToUnixEpoch(),
            opened_at: params.openedAt.ToUnixEpoch(),
            //TODO DADOS DE ENDEREÇO

            latitude: 0,
            longitude: 0
        }
    }


    static catchRegister(error: IError) {

        switch (error.statusCode) {
            case 412:
                Flash.invalidCode();
                return;
            case 409:

                if (error.error[0].Field.toUpperCase() === "MAIL")
                    Flash.customConflict("E-mail")
                else if (error.error[0].Field.toUpperCase() === "CNPJ")
                    Flash.customConflict("Cnpj")
                return;

            default:
                Flash.someoneBullshit();
                return;
        }
    }


}

class RegisterValidator extends Validator<IEstablishmentRegister> {
    constructor() {
        super();

        this.ruleFor('name')
            .notEmpty()
            .withMessage('Preencha o nome do estabelecimento.');

        this.ruleFor('mail')
            .emailAddress()
            .withMessage('Preencha com um e-mail.');

        this.ruleFor('ownerName')
            .notEmpty()
            .withMessage('Preencha com o nome do responsável.');

        this.ruleFor('closedAt')
            .notNull();

        this.ruleFor('openedAt')
            .notNull();

        this.ruleFor('description')
            .notEmpty()
            .minLength(10)
            .withMessage('Detalhe um pouco mais seu estabelecimento.');

        this.ruleFor('modelBusinessId')
            .notNull()
            .notEmpty()

        this.ruleFor('ownerCpf')
            .notEmpty()
            .must(beValidCpf)
            .withMessage('Preencha com um CPF válido.');

        this.ruleFor('cnpj')
            .notEmpty()
            .must(beValidCnpj)
            .withMessage('Preencha com um CNPJ válido.');

        this.ruleFor('password')
            .minLength(5)
            .withMessage('Senha deve ter no mínimo 5 caracteres')

        this.ruleFor('phone')
            .notEmpty()
            .matches(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/))
            .withMessage('Preencha com um telefone válido.');
    }
}
