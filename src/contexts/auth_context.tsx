import React, { createContext, useState, useEffect } from 'react'
import { IEstablishmentRegister } from '../components/screens/register/interfaces'
import { RegisterService } from '../services/register_service'
import { LoginService } from '../services/login_service'
import { createEstablishmentInStorage, isLogged } from '../utils/async_storage'

export const AuthContext = createContext(
    {} as {
        logged: boolean
        signIn: (mail: string, password: string) => Promise<void>
        register: (params: IEstablishmentRegister, code: string) => Promise<void>
    }
)

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setlogged] = useState(false)

    useEffect(() => {
        const establishmentIsLogged = async () => {
            const response = await isLogged()

            setlogged(response)
        }

        establishmentIsLogged()
    }, [])

    const signIn = async (mail: string, password: string) => {
        const establishment = await LoginService.login(mail, password)

        await createEstablishmentInStorage(establishment)

        setlogged(true)
    }

    const register = async (params: IEstablishmentRegister, code: string): Promise<void> => {
        await RegisterService.register(params, code)
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, register }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
