import React, { useState, useContext } from 'react';
import { PickerTimeStartEnd } from '../../component/picker_time_start_end';
import { IEstablishmentRegister } from './interfaces';
import { KeyboardAvoidingView } from 'react-native'
import { Wrapper, Description, Phone, Mail, Cnpj, Name, Container, GooglePlaces, NameResponsible, Cpf, ArrowIcon, CompleteButton, KeyboardWrapper } from './styles';
import { PickerModelBusiness } from '../../component/picker_model_business';
import { useNavigation } from '@react-navigation/native';
import { RegisterService } from '../../../services/registerService';

export const RegisterScreen: React.FC = () => {

    const navigation = useNavigation();

    const [keyboardAvoidingViewEnabled, setKeyboardAvoidingViewEnabled] = useState<boolean>(true)

    const [establishment, setEstablishment] = useState<IEstablishmentRegister>({
        name: '',
        phone: '',
        mail: '',
        description: '',
        cnpj: '',
        closedAt: new Date(Date.now()),
        openedAt: new Date(Date.now()),
        ownerName: '',
        ownerCpf: '',
        modelBusinessId: ''
    })

    const register = async () => {

        try {

            const valid = RegisterService.validate(establishment);


            await RegisterService.register(establishment);

        } catch (error) {

        }
    }

    return (
        <Wrapper >
            <KeyboardWrapper enabled={keyboardAvoidingViewEnabled}>
                <Container>

                    <Name
                        value={establishment.name}
                        setValue={(e: string) => setEstablishment({ ...establishment, name: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(false)}
                    />

                    <Phone
                        value={establishment.phone}
                        onChangeText={(e: string) => setEstablishment({ ...establishment, phone: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(false)}
                    />

                    <Mail
                        value={establishment.mail}
                        setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(false)}
                    />
                    <Cnpj
                        value={`${establishment.cnpj}`}
                        onChangeText={(e: string) => setEstablishment({ ...establishment, cnpj: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(true)}
                    />

                    <NameResponsible
                        value={`${establishment.ownerName}`}
                        setValue={(e: string) => setEstablishment({ ...establishment, ownerName: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(true)}
                    />

                    <Cpf
                        value={`${establishment.ownerCpf}`}
                        onChangeText={(e: string) => setEstablishment({ ...establishment, ownerCpf: e })}
                        onFocus={() => setKeyboardAvoidingViewEnabled(true)}
                    />

                    <ArrowIcon />
                </Container>
            </KeyboardWrapper>
            <Container>

                <ArrowIcon mode={'up'} />
                <GooglePlaces
                    onPress={(data, details = null) => null}
                />

                <Description
                    value={establishment.description}
                    setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
                    onFocus={() => setKeyboardAvoidingViewEnabled(true)}
                />

                <PickerTimeStartEnd
                    startValue={establishment.openedAt}
                    endvalue={establishment.closedAt}
                />

                <PickerModelBusiness
                    onChangeCb={(e: string) => setEstablishment({ ...establishment, modelBusinessId: e })}
                />


                <CompleteButton onPress={() => navigation.navigate('Contract', establishment)} />

            </Container>

        </Wrapper >
    );
}
