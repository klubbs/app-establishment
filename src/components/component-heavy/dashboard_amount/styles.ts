import styled from "styled-components/native";
import colors from "../../../../assets/constants/colors";
import Button from "../../component/button";

export const Wrapper = styled.ScrollView.attrs({
	contentContainerStyle: {
		justifyContent: "space-evenly",
		alignItems: "center",
		flex: 1,
	},
})`
	background-color: ${colors.COLOR_SECUNDARY_BLACK};
`;

export const ValueSubtitle = styled.Text`
	color: ${colors.COLOR_WHITE_80};
	font-size: 15px;
	font-family: "Nunito_Light";
`;

export const WrapperAmount = styled.View`
	width: 100%;
	align-items: center;
`;

export const Amount = styled.Text`
	color: ${colors.COLOR_WHITE};
	font-size: 25px;
	font-family: "Nunito_Bold";
`;

export const MessageSubtitle = styled.Text`
	color: ${colors.COLOR_WHITE_80};
	font-size: 12px;
	font-family: "Nunito_Light";
`;

export const DocsButton = styled(Button).attrs((props) => ({
	text: "Comprovar documentação",
	styleContainer: {
		width: "60%",
		height: "15%",
		backgroundColor: colors.COLOR_YELLOW,
	},
}))``;

export const BlurBox = styled.View`
	width: 80px;
	height: 10px;
	background-color: ${colors.COLOR_WHITE_80};
`;

export const OnlineStoreContainer = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	justify-content: center;
	align-items: center;
	padding-horizontal: 25px;
	padding-vertical: 5px;
	border-radius: 5px;
	background-color: ${`${colors.COLOR_RED}60`};
`;

export const OnlineText = styled.Text`
	color: ${colors.COLOR_RED};
	font-size: 12px;
	font-family: "Nunito_Bold";
`;
