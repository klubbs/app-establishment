import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const WrapperPicker = styled(Picker).attrs(() => ({

}))`
    width: 90%;
    height:100px;
    background-color: ${colors.COLOR_WHITE};
    border-radius: 10px;
    padding:10px;
    margin-bottom: 30px;
    justify-content: center;
`
