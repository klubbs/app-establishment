//TODO: transformar somente em um type pois são iguais
export interface IOffer {
	description: string
	offPercentual: number
	validAt: Date
	minimumTicket: string
	workingDays: number[]
}
//TODO: transformar somente em um type pois são iguais
export interface IOfferRequest {
	description: string
	off_percentual: number
	valid_at: number
	working_days: number[]
	minimum_ticket: number
}


export interface IGetStoreOffers {
	id: string
	off_percentual: number
	valid_at: number,
	created_at: number,
	is_invalidated: boolean,
	minimum_ticket: number,
	working_days: number[]
}
