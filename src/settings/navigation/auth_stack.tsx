import React, { useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { IAuthStackParams } from '../interfaces/IAuthStackParams';
import { WelcomeScreen } from '../../components/screens/welcome';
import { RegisterScreen } from '../../components/screens/register';
import colors from '../../../assets/constants/colors';
import { ContractScreen } from '../../components/screens/contract';
import { RegisterCodeScreen } from '../../components/screens/register_code';


const AuthStack = createStackNavigator<IAuthStackParams>();

export const AuthStackNavigator: React.FC<{}> = () => {
    return (
        <AuthStack.Navigator screenOptions={({ navigation, route }) =>
        ({
            headerTransparent: true, headerBackTitleVisible: false, headerTitleStyle: { color: "transparent" }
        })}  >
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} options={{
                headerTintColor: colors.COLOR_WHITE,
                headerTitle: 'Abertura de conta',
                headerTitleStyle: { color: colors.COLOR_WHITE_80, fontFamily: 'Nunito_Light' }
            }} />
            <AuthStack.Screen name="Contract" component={ContractScreen} options={{
                headerTintColor: colors.COLOR_WHITE,
                headerTitle: 'Termos e serviços',
                headerTitleStyle: { color: colors.COLOR_WHITE_80, fontFamily: 'Nunito_Light' }
            }} />
            <AuthStack.Screen name="RegisterCode" component={RegisterCodeScreen} options={{
                headerTintColor: colors.COLOR_WHITE,
                headerTitle: 'Verificar e-mail',
                headerTitleStyle: { color: colors.COLOR_WHITE_80, fontFamily: 'Nunito_Light' }
            }} />
        </AuthStack.Navigator >
    );
};
