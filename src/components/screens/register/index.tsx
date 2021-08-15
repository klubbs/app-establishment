import React, { useState } from 'react';
import { View } from 'react-native';
import { InputWithIcon } from '../../component/input-with-icon';
import { IEstablishmentRegister } from './interfaces';

import { Wrapper, Description, Phone, Mail, Cnpj, Name } from './styles';

export const RegisterScreen: React.FC = () => {

    const [establishment, setEstablishment] = useState<IEstablishmentRegister>({ name: '', phone: '', mail: '', description: '', cnpj: '', closedAt: 0, openedAt: 0 })

    return (
        <Wrapper>
            <Name
                value={establishment.name}
                setValue={(e: string) => setEstablishment({ ...establishment, name: e })} />

            <Cnpj
                value={`${establishment.cnpj}`}
                setValue={(e: string) => setEstablishment({ ...establishment, cnpj: e })}
            />

            <Mail
                value={establishment.mail}
                setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
            />

            <Phone
                value={establishment.phone}
                setValue={(e: string) => setEstablishment({ ...establishment, phone: e })}
            />

            {/* DATA */}

            <Description
                value={establishment.description}
                setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
            />
        </Wrapper>
    );
}
