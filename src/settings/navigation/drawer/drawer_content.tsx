import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import colors from '../../../../assets/constants/colors';


export const DrawerContent: React.FC = () => {

    const navigation = useNavigation();

    return (
        <DrawerContentScrollView >
            <DrawerItem
                label="Painel"
                labelStyle={{ color: colors.COLOR_WHITE }}
                onPress={() => navigation.navigate({ name: 'Home' })}
            />
        </DrawerContentScrollView>
    );
};
