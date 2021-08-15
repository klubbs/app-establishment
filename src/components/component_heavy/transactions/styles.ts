import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.View`
    flex: 1.2;
    align-items: center;
    background-color: ${colors.COLOR_WHITE};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding-top: 10px;
`
export const TransactionsSubtitle = styled.Text`
  color:${colors.COLOR_BLACK80};
  font-size:18px;
  margin-bottom: 20px;
  font-family:'Nunito_Bold';
`
