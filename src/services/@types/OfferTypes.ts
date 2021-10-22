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

export interface ICheckoutTransactionsRequest {
	id: string;
	code: string;
	influencer_name: string
	created_at: number;
	amount: number;
}
