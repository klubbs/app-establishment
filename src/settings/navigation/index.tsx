import React, { useState } from 'react';
import { View } from 'react-native';
import { AppStackNavigator } from './app_stack';
import { AuthStackNavigator } from './auth_stack';
import { DrawerNavigation } from './drawer/drawer_stack';

// import { Container } from './styles';

export const Navigations: React.FC = () => {
    const [logged, setLogged] = useState(false)



    return (
        logged ? <DrawerNavigation /> : < AuthStackNavigator />
    );
}
