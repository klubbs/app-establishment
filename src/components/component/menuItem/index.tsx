import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';

import { MenuItemContainer, MenuText, MenuTextContainer, MenuTextDescription, MenuItemIcon, MenuItemArrow, ArrowRight } from './styles';
import colors from '../../../../assets/constants/colors';
import { IMenu } from './@types';

export const MenuItem: React.FC<IMenu> = (props) => {
	return (
		<MenuItemContainer onPress={props.cb}>
			<MenuItemIcon >
				<Feather name={props.icon} color={colors.COLOR_YELLOW} size={16} />
			</MenuItemIcon>
			<MenuTextContainer>
				<MenuText>{props.text}</MenuText>
				<MenuTextDescription>{props.description}</MenuTextDescription>
			</MenuTextContainer>
			<MenuItemArrow >
				<ArrowRight />
			</MenuItemArrow>
		</MenuItemContainer>
	);
}
