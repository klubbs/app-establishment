import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';

export const Wrapper = styled.View`
	background-color: ${colors.COLOR_SECUNDARY_BLACK};
	flex:1;
	padding-top: 20%;
`

export const SubscriptionWrapper = styled.View`
	width: 100%;
	align-items: center;
`

export const SubscriptionContainer = styled.View`
	background-color: ${colors.COLOR_BLACK40};
	/* left: 39%; */
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: 5px 3px 5px 3px ;
	width: 100;
`

export const SubscriptionTitle = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:12px;
  font-family:'Nunito_Bold';
	background-color: ${colors.COLOR_BLACK40};
	padding: 6px 30px 6px 30px ;
	`
