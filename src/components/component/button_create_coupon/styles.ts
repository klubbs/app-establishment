import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8
}))`
    background-color: ${colors.COLOR_YELLOW};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    right: 8%;
`
