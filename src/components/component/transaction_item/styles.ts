import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';



export const Wrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 60px;
    margin:10px;
`


export const WrapperLeft = styled.View`
    flex:0.5;
	 height: 50px;
`

export const GreenContainer = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_GREEN};
`


export const WrapperMiddle = styled.View`
    flex:2;
    height: 50px;
    justify-content: space-evenly;
    padding-horizontal:10px;
`

export const Influencer = styled.Text`
  color:${colors.COLOR_SECUNDARY_BLACK};
  font-size:16px;
  font-family:'Nunito_Bold';
`

export const Subtitle = styled.Text`
  color:${colors.COLOR_BLACK50};
  font-size:12px;
  font-family:'Nunito_Regular';
`

export const WrapperRight = styled.View`
    flex:0.8;
	 height: 50px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const Amount = styled.Text`
  color:${colors.COLOR_SECUNDARY_BLACK};
  font-size:14px;
  font-family:'Nunito_Bold';
`
