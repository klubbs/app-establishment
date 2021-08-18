import { showFlash } from 'flash-notify'

export class Flash {


    static invalidFields = () => {
        showFlash({ type: 'NEUTRAL', desc: 'Existem dados inválidos', title: 'Preencha corretamente' })
    }

    static incorrectLogin = () => {
        showFlash({ type: 'WARNING', desc: 'Parece que tem algo de errado com esses dados', title: 'Login inválido' })
    }

    static customMessage = (message: string, title: string) => {
        showFlash({ type: 'NEUTRAL', desc: message, title: title })
    }


    static someoneBullshit = () =>
        showFlash({ type: 'WARNING', title: 'Acho que alguém fez besteira', desc: 'Já estamos resolvendo este problema, desculpe.' })


    static spillCoffee = () =>
        showFlash({ type: 'DANGER', title: 'Caiu café por aqui', desc: 'Desculpe, já estamos limpando a bagunça.' })


    static disconnectedWire = () =>
        showFlash({ type: 'NEUTRAL', title: 'Um fio desconectou', desc: 'Tente novamente mais tarde.' })


    static clearMemory = () =>
        showFlash({ type: 'NEUTRAL', title: 'Feito.', desc: 'Memória liberada com sucesso.' })


}
