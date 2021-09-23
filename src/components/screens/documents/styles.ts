import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';
import { FileIcon } from '../../../../assets/icons/fileIcon';

const { width } = Dimensions.get('window')

export const Wrapper = styled.View`
	padding-vertical:15%;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${colors.COLOR_WHITE};
`

export const FileSubtitle = styled.Text`
  color:${colors.COLOR_SECUNDARY_BLACK};
  font-size:14px;
  font-family:'Nunito_SemiBold';
`

export const FileContainer = styled.View`
	flex-direction: row;
	width: 110%;
	align-items: center;
	margin-bottom: 40px;
	justify-content: space-around;
`

export const FileBoxSubtitle = styled.View`
	background-color: ${colors.COLOR_BLACK10};
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	width: 60%;
	height: 80px;
`

export const FileBoxUpload = styled.TouchableOpacity<{ active: boolean }>`
	background-color: ${props => props.active ? colors.COLOR_YELLOW_50 : colors.COLOR_BLACK10};
	align-items: center;
	justify-content: center;
	border-radius: 10px;
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

export const Icon = styled(FileIcon).attrs((props) => ({
	width: 20,
	height: 20,
	fill: props.active ? colors.COLOR_YELLOW : colors.COLOR_BLACK40
})) <{ active: boolean }>``
export const SendButton = styled(Button).attrs(props => ({
	text: 'Enviar',
	styleContainer: {
		width: '50%', height: 60
	}
}))``


export const Subtitle = styled.Text`
  color:${colors.COLOR_BLACK50};
  font-size:12px;
  margin-top:10px;
  font-family:'Nunito_Light';
`


export const Title = styled.Text`
  color:${colors.COLOR_SECUNDARY_BLACK};
  font-size:16px;
  font-family:'Nunito_Regular';
`
