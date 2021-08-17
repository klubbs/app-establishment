import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

export const InputWithIcon: React.FC<{ value: string, setValue: any, style?: any } & TextInputProps> = (props) => {
    return (
        <Input {...props} placeholder={props.placeholder ?? ''} onChangeText={props.setValue} value={props.value} />
    );
}
