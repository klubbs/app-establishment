import React, { createContext, useState } from 'react';

export const AuthContext = createContext({} as { logged: boolean, signIn: () => Promise<void> });

const AuthProvider: React.FC = ({ children }) => {

    const [logged, setlogged] = useState(false);


    const signIn = async () => {
        setlogged(true)
    }


    return (
        <AuthContext.Provider value={{ logged, signIn }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
