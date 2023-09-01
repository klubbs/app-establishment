import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.COLOR_WHITE};
`

export const Container = styled.View`
	height: 105px;
	width: 100%;
	border-radius: 5px;
	flex-direction: row;
	justify-content: center;
	padding-horizontal: 20px;
	align-items: center;
	background-color: ${colors.COLOR_SECUNDARY_WHITE};
	margin-top:20px
`

export const PercentualTitle = styled.Text`
  color:${colors.COLOR_BLACK80};
  font-size:18px;
  font-family:'Nunito_Bold';
`
export const SideContainer = styled.View`
	flex: 0.9;
	height: 100%;
	justify-content: center;
`
export const EnableContainer = styled.View<{ disable: boolean }>`
	background-color: ${({ disable }) => disable ? colors.COLOR_SECUNDARY_BLACK : colors.COLOR_SECUNDARY_GREEN};
	height: 30;
	width: 80px;
	border-radius: 5px;
	justify-content: center;
	align-items:center ;
`

export const EnableTitle = styled.Text`
  color:${colors.COLOR_WHITE};
  font-size:12px;
  font-family:'Nunito_Bold';
`

export const ValidAtTitle = styled.Text`
  color:${colors.COLOR_BLACK80};
  font-size:12px;
  font-family:'Nunito_SemiBold';
`

export const DisableActionContainer = styled.TouchableOpacity.attrs((props) => ({
	activeOpacity: 0.5,
}))`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 20%;
`;

export const DisableActionContainerColor = styled.View<{ invalidated: boolean }>`
  justify-content: center;
  align-items: center;
  border-top-right-radius: 8;
  border-bottom-right-radius: 8;
  height: 83%;
	background-color: ${({ invalidated }) => invalidated ? colors.COLOR_BLACK20 : colors.COLOR_RED};
  width: 100%;
`;


export const EmptyText = styled.Text`
  font-size: 15px;
  color: ${colors.COLOR_BLACK50};
  font-family: 'Nunito_Regular';
  top: 40px;
  text-align: center;
  margin-bottom: 10px;
`;
