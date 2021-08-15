import React from 'react';
import { Title, ButtonWrapper } from './styles';



export type IButtonProps = {
    text: string
    onPress: any
    styleContainer?: any
}

const Button: React.FC<IButtonProps> = ({ text, onPress, styleContainer }) => {
    return (
        <ButtonWrapper onPress={onPress} style={{ ...styleContainer }} >
            <Title>{text}</Title>
        </ButtonWrapper>
    );
}

export default Button;
