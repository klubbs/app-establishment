export type IRegisterRequest = {
	name: string
	cnpj: string
	mail: string
	phone: string
	opened_at: number
	closed_at: number
	description: string
	owner_name: string
	owner_cpf: string
	establishment_model_business_id: string
	password: string
	code: string
	latitude: number
	longitude: number
}


export type ICategoryResponse = {
	id: string,
	description: string,
	model_business: string
}

