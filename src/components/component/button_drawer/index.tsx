import React from 'react';
import { View } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { AlignLeftIcon } from '../../../../assets/icons/align_left_icon';
import { useNavigation } from '@react-navigation/native';
import { Wrapper } from './styles';

export const ButtonDrawer: React.FC = (props) => {

    const navigation = useNavigation();

    return (
        <Wrapper onPress={() => navigation.openDrawer()}>
            <AlignLeftIcon width={20} height={20} fill={colors.COLOR_WHITE} />
        </Wrapper>
    );
}

