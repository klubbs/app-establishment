import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const SquareTop = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareLeft = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareRight = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`

export const SquareBottom = styled.View`
    flex:1;
    background-color: ${colors.COLOR_BLACK80};
`


export const CenterWrapper = styled.View`
    flex:1;
    flex-direction: row;
`


export const Focused = styled.View`
    flex:10;
`

export const ScanSubtitle = styled.Text`
  color:${colors.COLOR_WHITE};
  position: absolute;
  top: 20%;
  left: 30%;
  font-size:20px;
  font-family:'Nunito_SemiBold';
`

export const ScanDescSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  position: absolute;
  top: 24%;
  left: 26%;
  font-size:15px;
  font-family:'Nunito_Light';
`
