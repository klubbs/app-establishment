import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8
}))`
    position: absolute;
    bottom: 30px;
    left: 34.5%;
    border-radius: 20px;
    width: 30%;
    height: 13%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_YELLOW_95};
`
