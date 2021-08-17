import { IEstablishmentRegister } from "../components/screens/register/interfaces";
import api from "../settings/services/api";
import { IRegisterRequest } from "./interfaces/iregister";
import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { Validator } from 'fluentvalidation-ts';

export class RegisterService {


    static async register(params: IEstablishmentRegister) {
        const entitie = this.contract(params);

        const { data } = await api.post('');
    }

    static validate(params: IEstablishmentRegister): ValidationErrors<IEstablishmentRegister> {

        const validator = new RegisterValidator();

        validator.validate(params)


    }

    static contract(params: IEstablishmentRegister): IRegisterRequest {
        return {
            name: params.name,
            description: params.description,
            ownerName: params.ownerName,
            modelBusinessId: params.modelBusinessId,
            mail: params.mail,
            cnpj: params.cnpj.replace(/\D/g, ""),
            ownerCpf: params.ownerCpf.replace(/\D/g, ""),
            phone: params.phone.replace(/\D/g, ""),
            closedAt: params.closedAt.getTime(),
            openedAt: params.openedAt.getTime()
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
            .matches(new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/))
            .withMessage('Preencha com um CPF válido.');

        this.ruleFor('cnpj')
            .notEmpty()
            .matches(new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/))
            .withMessage('Preencha com um CNPJ válido.');

        this.ruleFor('phone')
            .notEmpty()
            .matches(new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/))
            .withMessage('Preencha com um telefone válido.');
    }
}
