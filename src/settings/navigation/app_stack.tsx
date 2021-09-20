import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IAppStackParams } from '../@types/iapp_stack_params'
import { HomeScreen } from '../../components/screens/home'
import { QrCodeScanner } from '../../components/screens/qr_code_scanner'
import colors from '../../../assets/constants/colors'
import { DocumentsScreen } from '../../components/screens/documents'
import { ConfigurationsScreen } from '../../components/screens/configurations'

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
			<AppStack.Screen name="Documents"
				component={DocumentsScreen}
				options={{ headerTintColor: colors.COLOR_YELLOW }}
			/>
			<AppStack.Screen
				name="Configurations"
				component={ConfigurationsScreen}
				options={{ headerTintColor: colors.COLOR_YELLOW }}
			/>
			<AppStack.Screen
				name="QrScanner"
				component={QrCodeScanner}
				options={{ headerTintColor: colors.COLOR_WHITE }}
			/>
		</AppStack.Navigator>
	)
}
