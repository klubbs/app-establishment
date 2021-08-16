import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';


export const TimePicker = styled(DateTimePicker).attrs(() => ({
    testID: "dateTimePicker",
    mode: 'time',
    locale: 'pt-BR',
    display: "spinner",
    minuteInterval: 5,
    textColor: colors.COLOR_SECUNDARY_BLACK
}))`
    height: 80px;
    width: 30%;
`

export const Wrapper = styled.View`
    color:${colors.COLOR_SECUNDARY_BLACK};
    background-color:${colors.COLOR_WHITE};
    overflow:hidden;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius:10px;
    padding:10px;
    width:90%;
    height:120px;
    margin-bottom: 30px;
`

export const SubtitleContainer = styled.View`
    justify-content: space-evenly;
    width:100%;
    align-items: center;
`


export const Subtitle = styled.Text`
    color:${colors.COLOR_BLACK80};
    font-size:15px;
    font-family:'Nunito_Light';
`
