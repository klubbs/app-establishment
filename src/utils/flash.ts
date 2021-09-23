import { showFlash } from 'flash-notify'

export class Flash {


	static invalidFields = () => {
		showFlash({ type: 'NEUTRAL', desc: 'Existem dados inválidos', title: 'Preencha corretamente' })
	}

	static incorrectLogin = () => {
		showFlash({ type: 'WARNING', desc: 'Parece que tem algo de errado com esses dados', title: 'Login inválido' })
	}

	static customMessage = (
		message: string,
		title: string,
		type?: 'SUCCESS' | 'NEUTRAL' | 'WARNING' | 'DANGER') => {
		showFlash({ type: type ?? 'NEUTRAL', title: title, desc: message })
	}

	static invalidCode = () =>
		showFlash({ type: 'WARNING', title: 'Inválido', desc: 'Código inválido.' })


	static someoneBullshit = () =>
		showFlash({ type: 'DANGER', title: 'Acho que alguém fez besteira', desc: 'Já estamos resolvendo este problema, desculpe.' })


	static spillCoffee = () =>
		showFlash({ type: 'DANGER', title: 'Caiu café por aqui', desc: 'Desculpe, já estamos limpando a bagunça.' })


	static disconnectedWire = () =>
		showFlash({ type: 'NEUTRAL', title: 'Um fio desconectou', desc: 'Tente novamente mais tarde.' })

	static clearMemory = () =>
		showFlash({ type: 'NEUTRAL', title: 'Feito.', desc: 'Memória liberada com sucesso.' })


	static customConflict = (field: string) =>
		//TODO: Adicionar customColors ao WARNING
		showFlash({ type: 'WARNING', title: `${field} em uso`, desc: `${field} já esta sendo utilizado.` })


	static permissionCreateManyCoupons = () =>
		showFlash({
			type: 'NEUTRAL', title: 'Limite de cupons atingido !',
			desc: 'Aguarde até amanhã para poder criar mais'
		})

	static congratulationCreateCoupon = () => {
		showFlash({
			type: 'SUCCESS', title: 'PARABÉNS 🥳', desc: 'Seu cupom já esta válido para ser utilizado!'
		})
	}

}
