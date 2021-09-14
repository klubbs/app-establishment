
export interface IEstablishmentRegister {
	name: string,
	cnpj: string,
	mail: string,
	phone: string,
	openedAt: Date,
	closedAt: Date,
	description: string,
	ownerName: string,
	ownerCpf: string,
	businessCategoryId: string,
	password: string,
	lat: number,
	long: number
	address: string
}
