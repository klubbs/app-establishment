import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const Wrapper = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.8
}))`
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    left: 8%;
`
