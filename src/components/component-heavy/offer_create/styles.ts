import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CancelIcon } from '../../../../assets/icons/cancel_icon';
import { InputWithMask } from '../../component/input-with-mask';
import { heightPercentageToDP, isSmallAndroid, widthPercentageToDP } from '../../../utils/dimensions';
import { Platform } from 'react-native';


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
    height: ${heightPercentageToDP(50)};
    width: 90%;
    border-radius: ${widthPercentageToDP(2)};
`

export const SubContainer = styled.View`
    background-color: ${colors.COLOR_WHITE};
    overflow: hidden;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    height:  ${heightPercentageToDP(9)};;
    width: 90%;
    border-radius: ${widthPercentageToDP(2)};
`

export const WrapperCoupon = styled.View`
	width: 100%;
	flex:1;
	justify-content: center;
	align-items: center;
`

export const Off = styled.Text`
    position: absolute;
    top: ${Platform.select({ ios: '25%', android: isSmallAndroid() ? '15%' : '25%' })};
    left: 12%;
    color:${colors.COLOR_YELLOW_BUTTON_TEXT};
    font-size:25px;
    font-family:'Nunito_Bold';
`

export const AndroidTime = styled.Text`
    color:${colors.COLOR_WHITE};
    font-size:18px;
    border-radius: 10px;
    font-family:'Nunito_Bold';
`

export const TouchablePickerAndroid = styled.TouchableOpacity`
    position: absolute;
    bottom: 18%;
`

export const ValidSubtitle = styled.Text`
    align-self: flex-start;
    position: absolute;
    top: 36%;
    right: 15%;
    color:${colors.COLOR_WHITE_40};
    font-size:13px;
    font-family:'Nunito_Bold';
`

export const CancelClick = styled.TouchableOpacity`
    bottom:${heightPercentageToDP(8)};
    right: 40%;
	width:50px;
    height:5%;
    justify-content: center;
    margin-top:5%;
`

export const Cancel = styled(CancelIcon).attrs(() => ({
    width: 30,
    height: 30,
    fill: colors.COLOR_WHITE
}))`
`


export const DatePicker = styled(DateTimePicker).attrs(({
    testID: "dateTimePicker",
    locale: 'pt-BR',
    textColor: colors.COLOR_WHITE
}))`
    height: 90px;
    width: 90%;
    position:absolute;
    top:48%;
`


export const WrapperMinimumTicket = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width:100%;
	padding-horizontal:4%;
	margin-bottom:5%;
`

export const SubtitleMinimumTicket = styled.Text`
    color:${colors.COLOR_BLACK80};
	 font-size:14px;
    font-family:'Nunito_SemiBold';
`

export const MinimumTicket = styled(InputWithMask).attrs(({
    placeholder: 'R$0,00',
    keyboardType: 'numeric',
    type: 'money',
    options: {
        unit: '',
    }
}))`
	text-align:center;
	width: 40%;
	color:${colors.COLOR_SECUNDARY_BLACK};
	font-family: 'Nunito_Bold';
	background-color: ${colors.COLOR_BLACK10};
    text-align-vertical:center;
`



export const SubtitleWeeks = styled.Text`
    color:${colors.COLOR_BLACK40};
    margin-left: 15px;
	 margin-bottom:5px;
	 font-size:12px;
    font-family:'Nunito_Regular';
`

export const WrapperWeeks = styled.View`
	flex:0.6;
	justify-content: center;
    align-items: flex-start;
`
