import { ValidationErrors } from 'fluentvalidation-ts/dist/ValidationErrors';
import { IError } from '../settings/connection';
import { isEmpty, nameof } from "./extensions/object_extensions";

export const beValidCnpj = (cnpj: string): boolean => {
	var strCNPJ = cnpj.replace(/[^\d]+/g, '');

	// Testa as sequencias que possuem todos os dígitos iguais e se o cnpj não tem 14 dígitos, retonando falso e exibindo uma msg de erro
	if (strCNPJ === '00000000000000' || strCNPJ === '11111111111111' || strCNPJ === '22222222222222' || strCNPJ === '33333333333333' ||
		strCNPJ === '44444444444444' || strCNPJ === '55555555555555' || strCNPJ === '66666666666666' || strCNPJ === '77777777777777' ||
		strCNPJ === '88888888888888' || strCNPJ === '99999999999999' || strCNPJ.length !== 14) {
		return false;
	}

	// A variável numeros pega o bloco com os números sem o DV, a variavel digitos pega apenas os dois ultimos numeros (Digito Verificador).
	var tamanho = strCNPJ.length - 2;
	var numeros = strCNPJ.substring(0, tamanho);
	var digitos = strCNPJ.substring(tamanho);
	var soma = 0;
	var pos = tamanho - 7;

	// Os quatro blocos seguintes de funções irá reaizar a validação do CNPJ propriamente dito, conferindo se o DV bate. Caso alguma das funções não consiga verificar
	// o DV corretamente, mostrará uma mensagem de erro ao usuário e retornará falso, para que o usário posso digitar novamente um número
	for (let i = tamanho; i >= 1; i--) {
		soma += Number(numeros.charAt(tamanho - i)) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}

	var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != Number(digitos.charAt(0))) {
		return false;
	}

	tamanho = tamanho + 1;
	numeros = strCNPJ.substring(0, tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (let k = tamanho; k >= 1; k--) {
		soma += Number(numeros.charAt(tamanho - k)) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != Number(digitos.charAt(1))) {
		return false;
	}

	return true;

}


export const beValidCpf = (cpf: string): boolean => {

	if (typeof cpf !== "string") return false

	cpf = cpf.replace(/[\s.-]*/igm, '')

	if (
		!cpf ||
		cpf.length != 11 ||
		cpf == "00000000000" ||
		cpf == "11111111111" ||
		cpf == "22222222222" ||
		cpf == "33333333333" ||
		cpf == "44444444444" ||
		cpf == "55555555555" ||
		cpf == "66666666666" ||
		cpf == "77777777777" ||
		cpf == "88888888888" ||
		cpf == "99999999999"
	) {
		return false
	}

	let soma = 0
	let resto
	for (var i = 1; i <= 9; i++)
		soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
	resto = (soma * 10) % 11
	if ((resto == 10) || (resto == 11)) resto = 0
	if (resto != parseInt(cpf.substring(9, 10))) return false
	soma = 0
	for (var i = 1; i <= 10; i++)
		soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
	resto = (soma * 10) % 11
	if ((resto == 10) || (resto == 11)) resto = 0
	if (resto != parseInt(cpf.substring(10, 11))) return false
	return true
}

export function beValidMail(email: string): boolean {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(email))
}

export function keyHasInObjectValidator<T>(errors: ValidationErrors<T>, paramKey: keyof T): Object {
	if (!isEmpty(errors)) {
		if (errors.hasOwnProperty(nameof<T>(paramKey as any))) {
			return { [paramKey]: errors[paramKey] as any };
		} else {
			return {};
		}
	} else {
		return errors;
	}
}

export function isAPIException(error: any) {
	if (
		error?.hasOwnProperty(nameof<IError>('error')) &&
		error?.hasOwnProperty(nameof<IError>('message')) &&
		error?.hasOwnProperty(nameof<IError>('statusCode'))
	) {
		return true
	} else {
		return false
	}
}
