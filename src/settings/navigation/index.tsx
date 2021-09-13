import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../contexts/auth_context';
import { AppStackNavigator } from './app_stack';
import { AuthStackNavigator } from './auth_stack';
import { DrawerNavigation } from './drawer/drawer_stack';

// import { Container } from './styles';

export const Navigations: React.FC = () => {

	const { establishment } = useContext(AuthContext)

	return (
		establishment ? <DrawerNavigation /> : < AuthStackNavigator />
	);
}
