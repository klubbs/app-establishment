import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Input = styled.TextInput.attrs(props => ({
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
  `;
