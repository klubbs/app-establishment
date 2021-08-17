import React, { useState } from 'react';
import { PickerTimeStartEnd } from '../../component/picker_time_start_end';
import { IEstablishmentRegister } from './interfaces';

import { Wrapper, Description, Phone, Mail, Cnpj, Name, Container, GooglePlaces, NameResponsible, Cpf, ArrowIcon, CompleteButton } from './styles';
import colors from '../../../../assets/constants/colors';
import { PickerModelBusiness } from '../../component/picker_model_business';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen: React.FC = () => {

    const navigation = useNavigation();

    const [establishment, setEstablishment] = useState<IEstablishmentRegister>({
        name: '',
        phone: '',
        mail: '',
        description: '',
        cnpj: '', closedAt: new Date(Date.now()), openedAt: new Date(Date.now()),
        ownerName: '',
        ownerCpf: '',
        modelBusinessId: ''
    })

    return (
        <Wrapper >
            <Container>
                <Name
                    value={establishment.name} setValue={(e: string) => setEstablishment({ ...establishment, name: e })} />
                <Phone
                    value={establishment.phone} onChangeText={(e: string) => setEstablishment({ ...establishment, phone: e })}
                />
                <Mail
                    value={establishment.mail} setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
                />
                <Cnpj
                    value={`${establishment.cnpj}`} onChangeText={(e: string) => setEstablishment({ ...establishment, cnpj: e })}
                />
                <NameResponsible
                    value={`${establishment.ownerName}`} setValue={(e: string) => setEstablishment({ ...establishment, ownerName: e })}
                />
                <Cpf
                    value={`${establishment.ownerCpf}`} onChangeText={(e: string) => setEstablishment({ ...establishment, ownerCpf: e })}
                />

                <ArrowIcon />
            </Container>
            <Container>
                <ArrowIcon mode='up' />

                <GooglePlaces onPress={(data, details = null) => null} />

                <PickerTimeStartEnd startValue={establishment.openedAt} endvalue={establishment.closedAt} />

                <PickerModelBusiness
                    onChangeCb={(e: string) => setEstablishment({ ...establishment, modelBusinessId: e })}
                />

                <Description
                    value={establishment.description}
                    setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
                />

                <CompleteButton onPress={() => navigation.navigate({ name: 'Contract' })} />

            </Container>
        </Wrapper>
    );
}
