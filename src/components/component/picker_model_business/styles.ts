import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export const WrapperPicker = styled(Picker)`
    width: 90%;
	overflow: hidden;
    height:${(WINDOW_HEIGHT > 680) ? '100px' : '75px'};
    background-color: ${colors.COLOR_WHITE};
    border-radius: 10px;
    padding:10px;
    justify-content: center;
`

export const WrapperPickerItem = styled(Picker.Item).attrs(({
    color: colors.COLOR_SECUNDARY_BLACK
}))`
    font-family: 'Nunito_Light';
    font-size: 15;
`

export const CategoryDescription = styled.Text`
    font-family: 'Nunito_Regular';
    font-size: 12px ;
    color:${colors.COLOR_SECUNDARY_BLACK};
`

export const TouchableCategory = styled.TouchableOpacity.attrs(({
    activeOpacity: 0.8
}))`
    width: 90%;
	overflow: hidden;
    height:${(WINDOW_HEIGHT > 680) ? '100px' : '75px'};
    background-color: ${colors.COLOR_WHITE};
    border-radius: 10px;
    padding:10px;
    justify-content: center;
`