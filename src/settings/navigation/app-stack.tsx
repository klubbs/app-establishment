import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IAppStackParams } from '../@types/iapp-stack-params'
import { HomeScreen } from '../../components/screens/home'
import { QrCodeScanner } from '../../components/screens/qr-code-scanner'
import colors from '../../../assets/constants/colors'
import { DocumentsScreen } from '../../components/screens/documents'
import { ConfigurationsScreen } from '../../components/screens/configurations'
import { HelpScreen } from '../../components/screens/help'
import { PaymentsScreen } from '../../components/screens/payments'
import MyOffers from '../../components/screens/MyOffers'

const AppStack = createStackNavigator<IAppStackParams>()

export const AppStackNavigator: React.FC<{}> = () => {
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
				options={{
					headerTintColor: colors.COLOR_YELLOW
				}}
			/>
			<AppStack.Screen
				name="Configurations"
				component={ConfigurationsScreen}
				options={{ headerTintColor: colors.COLOR_YELLOW }}
			/>
			<AppStack.Screen
				name="Payments"
				component={PaymentsScreen}
				options={{ headerTintColor: colors.COLOR_YELLOW }}
			/>
			<AppStack.Screen
				name="QrScanner"
				component={QrCodeScanner}
				options={{ headerTintColor: colors.COLOR_WHITE }}
			/>
			<AppStack.Screen
				name="Help"
				component={HelpScreen}
				options={{ headerTintColor: colors.COLOR_YELLOW }}
			/>
			<AppStack.Screen
				name="MyOffers"
				component={MyOffers}
				options={{
					headerTintColor: colors.COLOR_YELLOW,
					headerTitle: 'Minhas ofertas',
					headerTitleStyle: { color: colors.COLOR_SECUNDARY_BLACK, fontFamily: 'Nunito_SemiBold' },
				}}
			/>

		</AppStack.Navigator>
	)
}
