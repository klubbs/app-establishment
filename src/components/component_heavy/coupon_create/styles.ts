import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CancelIcon } from '../../../../assets/icons/cancel_icon';

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_BLACK95};
`

export const Container = styled.View`
    background-color: ${colors.COLOR_WHITE};
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    height: 45%;
    width: 90%;
    border-radius: 20px;
`

export const SubContainer = styled.View`
    background-color: ${colors.COLOR_WHITE};
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    height: 10%;
    width: 90%;
    border-radius: 20px;
`

export const Off = styled.Text`
    position: absolute;
    top: 18%;
    left: 10%;
    color:${colors.COLOR_YELLOW_BUTTON_TEXT};
    font-size:25px;
    font-family:'Nunito_Bold';
`

export const ValidSubtitle = styled.Text`
    align-self: flex-start;
    position: absolute;
    top: 35%;
    left: 10%;
    color:${colors.COLOR_WHITE};
    font-size:13px;
    font-family:'Nunito_Light';
`

export const RulesSubtitle = styled.Text`
    align-self: flex-start;
    margin-left: 5%;
    color:${colors.COLOR_YELLOW_BUTTON_TEXT};
    font-size:14px;
    font-family:'Nunito_Light';
`

export const Rules = styled.TextInput.attrs(props => ({
	selectionColor: colors.COLOR_YELLOW,
	autoCapitalize: 'none',
	multiline: true,
	blurOnSubmit: true,
	returnKeyType: 'done'
}))`
    color:${colors.COLOR_SECUNDARY_BLACK};
    background-color:${'#E8E8E8'};
    width:95%;
    height: 30%;
    border-radius:5px;
    padding:10px;
    font-size: 15px;
`;


export const DatePicker = styled(DateTimePicker).attrs(() => ({
	testID: "dateTimePicker",
	mode: 'date',
	locale: 'pt-BR',
	display: "spinner",
	textColor: colors.COLOR_WHITE
}))`
    height: 50px;
    width: 90%;
    position:absolute;
    top:39%;
`

export const Cancel = styled(CancelIcon).attrs(() => ({
	width: 30,
	height: 30,
	fill: colors.COLOR_WHITE
}))`
    bottom:50px;
    right: 40%;
`
