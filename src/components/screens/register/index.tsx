import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { InputWithIcon } from '../../component/input-with-icon';
import { PickerTimeStartEnd } from '../../component/picker_time_start_end';
import { IEstablishmentRegister } from './interfaces';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Constants } from 'expo-constants'

import { Wrapper, Description, Phone, Mail, Cnpj, Name, Container, GooglePlaces, NameResponsible, Cpf } from './styles';

export const RegisterScreen: React.FC = () => {

    const [establishment, setEstablishment] = useState<IEstablishmentRegister>({ name: '', phone: '', mail: '', description: '', cnpj: '', closedAt: new Date(Date.now()), openedAt: new Date(Date.now()), ownerName: '', ownerCpf: '' })

    return (
        <Wrapper >
            <Container>
                <Name
                    value={establishment.name} setValue={(e: string) => setEstablishment({ ...establishment, name: e })} />
                <Phone
                    value={establishment.phone} setValue={(e: string) => setEstablishment({ ...establishment, phone: e })}
                />
                <Mail
                    value={establishment.mail} setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
                />
                <Cnpj
                    value={`${establishment.cnpj}`} setValue={(e: string) => setEstablishment({ ...establishment, cnpj: e })}
                />
                <NameResponsible
                    value={`${establishment.ownerName}`} setValue={(e: string) => setEstablishment({ ...establishment, ownerName: e })}
                />
                <Cpf
                    value={`${establishment.ownerCpf}`} setValue={(e: string) => setEstablishment({ ...establishment, ownerCpf: e })}
                />
            </Container>

            <Container>

                <GooglePlaces onPress={(data, details = null) => null} />

                <PickerTimeStartEnd startValue={establishment.openedAt} endvalue={establishment.closedAt} />

                <Description
                    value={establishment.description}
                    setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
                />


            </Container>
        </Wrapper>
    );
}
