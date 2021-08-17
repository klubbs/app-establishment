import React from 'react';
import { TextInputMaskProps } from 'react-native-masked-text'

import { InputMask } from './styles';

export const InputWithMask: React.FC<TextInputMaskProps> = (props) => {
    return <InputMask {...props} />;
}
