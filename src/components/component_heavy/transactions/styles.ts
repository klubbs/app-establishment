import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import {
	Placeholder,
	PlaceholderMedia,
	PlaceholderLine,
	Fade
} from "rn-placeholder";

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

export const NothingTransactionSubtitle = styled.Text`
  color:${colors.COLOR_BLACK50};
  font-size:14px;
  align-items: center;
  justify-content: center;
  font-family:'Nunito_Light';
`

export const PlaceHolderWrapper = styled(Placeholder)`
	padding-horizontal:20px;
`

export const PlaceHolderContent = styled(PlaceholderLine).attrs(props => ({
	width: 80
}))`
`
