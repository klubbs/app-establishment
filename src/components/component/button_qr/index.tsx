import React from 'react';
import colors from '../../../../assets/constants/colors';
import { QrIcon } from '../../../../assets/icons/qr_icon';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/dimensions';

import { Wrapper } from './styles';

export const ButtonQr: React.FC<{ onPress: any }> = (props) => {

    return (
        <Wrapper onPress={props.onPress}>
            <QrIcon
                fill={colors.COLOR_YELLOW_BUTTON_TEXT}
                width={widthPercentageToDP(20)}
                height={heightPercentageToDP(8)}
            />
        </Wrapper>
    );
}
