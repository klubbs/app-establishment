import { showFlash } from 'flash-notify'

export class Flash {


    static invalidFields = () => {
        showFlash({ type: 'NEUTRAL', desc: 'Existem dados inválidos.', title: 'Preencher corretamente' })
    }

    static customMessage = (message: string, title: string) => {
        showFlash({ type: 'NEUTRAL', desc: message, title: title })
    }


}
