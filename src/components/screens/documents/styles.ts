import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';

const { width } = Dimensions.get('window')

export const Wrapper = styled.View`
	padding-vertical:20%;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${colors.COLOR_WHITE};
`

export const Subtitle = styled.Text`
  color:${colors.COLOR_SECUNDARY_BLACK};
  font-size:14px;
  font-family:'Nunito_SemiBold';
`

export const FileContainer = styled.View`
	flex-direction: row;
	width: 110%;
	align-items: center;
	justify-content: space-around;
`

export const FileBoxSubtitle = styled.View`
	background-color: ${colors.COLOR_BLACK10};
	align-items: center;
	justify-content: center;
	border-radius: 10;
	width: 60%;
	height: 80px;
`

export const FileBoxUpload = styled.TouchableOpacity`
	background-color: ${colors.COLOR_BLACK10};
	align-items: center;
	justify-content: center;
	border-radius: 10;
	width: 25%;
	height: 80px;
`
export const Container = styled.View`
	flex:1;
	width: ${props => `${width}px`};
	justify-content: center;
	padding: 20px;
	align-items: center;
`

export const SendButton = styled(Button).attrs(props => ({
	text: 'Enviar',
	styleContainer: {
		width: '50%', height: 60,
		backgroundColor: colors.COLOR_YELLOW
	}
}))``
