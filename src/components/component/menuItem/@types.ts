export type IMenu = {
	key: string,
	icon: any,
	text: string,
	description: string,
	logged?: boolean,
	cb: () => void
}
