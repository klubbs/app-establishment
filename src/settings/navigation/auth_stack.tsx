import React, { useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { IAuthStackParams } from '../interfaces/IAuthStackParams';
import { WelcomeScreen } from '../../components/screens/welcome';


const AuthStack = createStackNavigator<IAuthStackParams>();

export const AuthStackNavigator: React.FC<{}> = () => {
    return (
        <AuthStack.Navigator screenOptions={({ navigation, route }) =>
        ({
            headerTransparent: true, headerBackTitleVisible: false, headerTitleStyle: { color: "transparent" }
        })}  >
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        </AuthStack.Navigator >
    );
};
