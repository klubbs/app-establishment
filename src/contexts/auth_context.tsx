import React, { createContext, useState } from 'react';
import { IEstablishmentRegister } from '../components/screens/register/interfaces';
import { RegisterService } from '../services/registerService';

export const AuthContext = createContext({} as {
    logged: boolean,
    signIn: (mail: string, password: string) => Promise<void>,
    register: (params: IEstablishmentRegister, code: string) => Promise<{}>
});

const AuthProvider: React.FC = ({ children }) => {

    const [logged, setlogged] = useState(false);


    const signIn = async (mail: string, password: string) => {
        setlogged(true)
    }

    const register = async (params: IEstablishmentRegister, code: string) => {
        return await RegisterService.register(params, code);
    }


    return (
        <AuthContext.Provider value={{ logged, signIn, register }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
