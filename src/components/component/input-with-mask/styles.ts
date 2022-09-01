import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'


export const InputMask = styled(TextInputMask).attrs(props => ({
    autoCapitalize: 'none',
    clearButtonMode: 'while-editing',
    textAlignVertical: 'top',
    returnKeyType: 'done'
}))`
    color:${colors.COLOR_SECUNDARY_BLACK};
    background-color:${colors.COLOR_WHITE};
    border-radius:10px;
    padding:10px;
    font-size: 15px;
    font-family:'Nunito_Light';
    text-align-vertical:center;
    text-align:center ;
  `;
