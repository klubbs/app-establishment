import React from 'react';
import { Title, ButtonWrapper } from './styles';



export type IButtonProps = {
	text: string
	onPress: any
	styleContainer?: any
	styleButton?: any
	disabled?: any
}

const Button: React.FC<IButtonProps> = ({ text, onPress, styleContainer, disabled, styleButton }) => {
	return (
		<ButtonWrapper disabled={disabled ?? false} onPress={onPress} style={{ ...styleContainer }} >
			<Title disabled={disabled ?? false} style={{ ...styleButton }} >{text}</Title>
		</ButtonWrapper>
	);
}

export default Button;
