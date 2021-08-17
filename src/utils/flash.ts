import { showFlash } from 'flash-notify'

export class Flash {


    static invalidFields = () => {
        showFlash({ type: 'NEUTRAL', desc: 'Existem dados inválidos', title: 'Preencher corretamente' })
    }

    static incompleteLogin = () => {
        showFlash({ type: 'WARNING', desc: 'Parece que tem algo de errado com esses dados', title: 'Login inválido' })
    }

    static customMessage = (message: string, title: string) => {
        showFlash({ type: 'NEUTRAL', desc: message, title: title })
    }


}
