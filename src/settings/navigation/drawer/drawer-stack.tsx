import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackNavigator } from '../app-stack';
import { DrawerContent } from './drawer-content';
import colors from '../../../../assets/constants/colors';
import DashboardProvider from '../../../contexts/dashboard-context';

// import { Container } from './styles';

const Drawer = createDrawerNavigator();


export const DrawerNavigation: React.FC = () => {

	return (
		<DashboardProvider>
			<Drawer.Navigator
				initialRouteName='appstack'
				drawerContent={(props) => <DrawerContent />}
				screenOptions={{
					headerTransparent: true,
					headerShown: false,
					headerTitleStyle: { color: "transparent" },
					drawerType: 'front',
					headerTintColor: 'transparent',
					overlayColor: colors.COLOR_YELLOW,
					drawerStyle: {
						backgroundColor: colors.COLOR_SECUNDARY_BLACK,
						width: 300,
					}
				}}
			>
				<Drawer.Screen name="appstack" component={AppStackNavigator} />
			</Drawer.Navigator >
		</DashboardProvider>
	);
}
