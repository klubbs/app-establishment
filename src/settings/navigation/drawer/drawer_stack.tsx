import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackNavigator } from '../app_stack';
import { DrawerContent } from './drawer_content';
import colors from '../../../../assets/constants/colors';
import { MoneyIcon } from '../../../../assets/icons/money_icon';
import { color } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import { AlignLeftIcon } from '../../../../assets/icons/align_left_icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Drawer = createDrawerNavigator();


export const DrawerNavigation: React.FC = () => {

    const dimensions = useWindowDimensions();


    return (
        <Drawer.Navigator
            initialRouteName="Start"
            drawerContent={(props) => <DrawerContent />}
            screenOptions={{
                headerTransparent: true,
                headerShown: false,
                headerTitleStyle: { color: "transparent" },
                drawerType: 'front',
                // headerTintColor: colors.COLOR_WHITE,
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
