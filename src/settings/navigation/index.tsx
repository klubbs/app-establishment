import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth_context';
import { AuthStackNavigator } from './auth_stack';
import { DrawerNavigation } from './drawer/drawer_stack';

// import { Container } from './styles';

export const Navigations: React.FC = () => {

	const { establishment } = useContext(AuthContext)

	return (
		establishment ? <DrawerNavigation /> : < AuthStackNavigator />
	);
}
