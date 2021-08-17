import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

import { Wrapper, RegisterButton, Input, Subtitle, Email } from './styles';
import { AuthContext } from '../../../contexts/auth_context';
import { RegisterCodeScreenProps } from '../../../settings/interfaces/IAuthStackParams';

export const RegisterCodeScreen: React.FC<RegisterCodeScreenProps> = () => {

    const { signIn } = useContext(AuthContext)

    const navigation = useNavigation();

    const [code, setCode] = useState<string>('');

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode as any });


    useEffect(() => { }, [])


    const renderCell = ({ index, symbol, isFocused }: { index: any, symbol: any, isFocused: any }) => {
        let textChild = null;

        if (symbol) {
            textChild = symbol;
        } else if (isFocused) {
            textChild = <Cursor />;
        }

        return (
            <Input key={index} onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
            </Input>
        );
    };

    return (
        <Wrapper>
            <Subtitle>Enviamos um código de 5 dígitos para</Subtitle>
            <Email>adonisdoda@gmail.com</Email>

            <CodeField
                value={code}
                onChangeText={(e: any) => setCode(e)}
                cellCount={5}
                keyboardType="default"
                textContentType="oneTimeCode"
                renderCell={renderCell}
                autoFocus={true}
                {...props}
            />
            <RegisterButton onPress={() => signIn()} />
        </Wrapper>
    );
}
