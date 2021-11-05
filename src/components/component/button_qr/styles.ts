import { Platform } from 'react-native';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { isSmallAndroid, widthPercentageToDP } from '../../../utils/dimensions';


export const Wrapper = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8
}))`
    position: absolute;
    bottom: 5%;
    left: 32%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_YELLOW_95};
    border-radius: ${widthPercentageToDP(3)};
    width: 35%;
    height: 15%;
`
