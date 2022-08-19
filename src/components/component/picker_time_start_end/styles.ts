import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { Dimensions, Platform } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export const TimePicker = styled(DateTimePicker).attrs(() => ({
    testID: "dateTimePicker",
    mode: 'time',
    locale: 'pt-BR',
    display: Platform.OS == 'ios' ? 'spinner' : "default",
    minuteInterval: 5,
    textColor: colors.COLOR_SECUNDARY_BLACK,

}))`
    height: 70px;
    width: 60%;
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
    width:100%;
    height:${(WINDOW_HEIGHT > 680) ? '100px' : '80px'};;
    margin-bottom: 30px;
`

export const SubtitleContainer = styled.View`
    justify-content: space-evenly;
    flex:1;
    align-items: center;
`


export const Subtitle = styled.Text`
    color:${colors.COLOR_BLACK80};
    font-size:15px;
    font-family:'Nunito_Light';
`
