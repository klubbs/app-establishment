import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors'
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/dimensions'

export const Wrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    background-color: ${colors.COLOR_BLACK40};
`


export const Container = styled.View`
    background-color: ${colors.COLOR_WHITE};
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    border-radius: ${widthPercentageToDP(2)};
`

export const YellowBalanceContainer = styled.View`
    
`