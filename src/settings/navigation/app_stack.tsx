import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IAppStackParams } from '../interfaces/iapp_stack_params'
import { HomeScreen } from '../../components/screens/home'
import { QrCodeScanner } from '../../components/component_heavy/qr_code_scanner'
import colors from '../../../assets/constants/colors'

const AppStack = createStackNavigator<IAppStackParams>()

export const AppStackNavigator: React.FC = () => {
	return (
		<AppStack.Navigator
			screenOptions={({ navigation, route }) => ({
				headerTransparent: true,
				headerBackTitleVisible: false,
				headerTitleStyle: { color: 'transparent' },
			})}>
			<AppStack.Screen name="Home" component={HomeScreen} />
			<AppStack.Screen
				name="QrScanner"
				component={QrCodeScanner}
				options={{ headerTintColor: colors.COLOR_WHITE }}
			/>
		</AppStack.Navigator>
	)
}
