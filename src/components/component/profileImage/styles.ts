import { Image } from "react-native-expo-image-cache";
import styled from 'styled-components/native';
import colors from '../../../../assets/constants/colors';

export const ImageProfileComponent = styled(Image).attrs(props => ({

}))`
	width:120px;
	height:100px;
	border-radius: 20px;
`

export const ContainerEmpty = styled.View`
	width:120px;
	height:100px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: ${colors.COLOR_WHITE_20};
`
