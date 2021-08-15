import React from 'react';
import { View } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { QrIcon } from '../../../../assets/icons/qr_icon';

import { Wrapper } from './styles';

export const ButtonQr: React.FC<{ onPress: any }> = (props) => {
    return (
        <Wrapper onPress={props.onPress}>
            <QrIcon
                fill={colors.COLOR_YELLOW_BUTTON_TEXT}
                width={'60em'}
                height={'60em'}
            />
        </Wrapper>
    );
}
