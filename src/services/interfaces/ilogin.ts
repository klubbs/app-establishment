export interface ILogin {
	mail: string;
	password: string
}

export interface ILoginResponse {
	id: string;
	name: string;
	description: string;
	mail: string;
	cnpj: string;
	image: string;
	phone: string;
	opened_at: number;
	closed_at: number;
	establishment_model_business_id: string;
	latitude: number;
	longitude: number;
	token: string;
	documentationStatus: string
}
