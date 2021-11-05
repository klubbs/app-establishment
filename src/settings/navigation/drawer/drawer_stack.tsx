import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackNavigator } from '../app_stack';
import { DrawerContent } from './drawer_content';
import colors from '../../../../assets/constants/colors';
import { useWindowDimensions } from 'react-native';

// import { Container } from './styles';

const Drawer = createDrawerNavigator();


export const DrawerNavigation: React.FC = () => {

    return (
        <Drawer.Navigator
            initialRouteName="Start"
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
            <Drawer.Screen name="AppStackNavigator" component={AppStackNavigator} />
        </Drawer.Navigator >
    );
}
