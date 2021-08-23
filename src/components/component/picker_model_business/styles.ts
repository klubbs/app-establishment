import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export const WrapperPicker = styled(Picker).attrs(() => ({

}))`
    width: 90%;
	 overflow: hidden;
    height:${(WINDOW_HEIGHT > 680) ? '100px' : '75px'};
    background-color: ${colors.COLOR_WHITE};
    border-radius: 10px;
    padding:10px;
    justify-content: center;
`
