import React, { useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { IAuthStackParams } from '../interfaces/IAuthStackParams';
import { WelcomeScreen } from '../../components/screens/welcome';
import { RegisterScreen } from '../../components/screens/register';
import colors from '../../../assets/constants/colors';


const AuthStack = createStackNavigator<IAuthStackParams>();

export const AuthStackNavigator: React.FC<{}> = () => {
    return (
        <AuthStack.Navigator screenOptions={({ navigation, route }) =>
        ({
            headerTransparent: true, headerBackTitleVisible: false, headerTitleStyle: { color: "transparent" }
        })}  >
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerTintColor: colors.COLOR_WHITE }} />
        </AuthStack.Navigator >
    );
};
