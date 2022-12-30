import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import { Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import Button from '../../component/button';
import { InputWithMask } from '../../component/input-with-mask';
import { MotiView } from 'moti'

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export const Wrapper = styled.SafeAreaView`
	flex:1;
	background-color: ${colors.COLOR_SECUNDARY_BLACK};
	align-items: flex-start;
`

export const Container = styled.View`
	flex:1;
	width:100%;
	justify-content:space-between ;
	padding:40px
`

export const BottomContainer = styled.View`
	flex:0.5;
	flex-direction: row;
	width:100%;
	justify-content: center;
	align-items: center;
`

export const Question = styled.Text`
  color:${colors.COLOR_WHITE};
	margin-top:40px;
  font-size:28px;
  font-family:'Nunito_ExtraBold';
`

export const AnimatedContainer = styled(MotiView).attrs(props => ({
	/* from: { opacity: 0 },
	animate: { opacity: 1 },
	exit: {
		opacity: 0
	} */
}))``



const InputBase = styled(InputWithIcon).attrs((props: { invalid: boolean }) => ({
}))`
	width: 95%;
	background-color:${colors.COLOR_WHITE};
	height:${(WINDOW_HEIGHT > 680) ? '60px' : '45px'};
	margin-bottom: 30px;
	text-align-vertical:center;
`

const InputMaskBase = styled(InputWithMask).attrs((props) => ({
	placeholderTextColor: colors.COLOR_BLACK50,
}))`
	width: 95%;
	height:${(WINDOW_HEIGHT > 680) ? '60px' : '45px'};
	margin-bottom: 30px;
	background-color:${colors.COLOR_WHITE};
`

export const Name = styled(InputBase).attrs((props) => ({
	placeholder: 'Nome fantasia',
	keyboardType: 'default'
}))``

export const Cnpj = styled(InputMaskBase).attrs(() => ({
	placeholder: 'CNPJ',
	keyboardType: 'numeric',
	type: 'cnpj'
}))``

export const Mail = styled(InputBase).attrs(() => ({
	placeholder: 'Email',
	keyboardType: 'email-address'
}))`
	`

export const Phone = styled(InputMaskBase).attrs(() => ({
	placeholder: 'Telefone',
	keyboardType: 'numeric',
	type: 'cel-phone'
}))`
	`

export const NameResponsible = styled(InputBase).attrs(() => ({
	placeholder: 'Nome do responsável legal',
	keyboardType: 'default'
}))`
	`

export const Cpf = styled(InputMaskBase).attrs(() => ({
	placeholder: 'CPF',
	keyboardType: 'numeric',
	type: 'cpf'
}))`
	`

export const Password = styled(InputBase).attrs(() => ({
	placeholder: 'Senha',
	keyboardType: 'default',
	secureTextEntry: true
}))`
	`

export const Description = styled(InputBase).attrs(() => ({
	placeholder: 'Descreva o estabelecimento para os usuários!',
	multiline: true,
	blurOnSubmit: true
}))`
width: 100 %;
margin-bottom: 30px;
height: 120px;
`


export const CompleteButton = styled(Button).attrs((props: { back?: boolean }) => ({
	text: props.back ? 'Voltar' : 'Próximo',
	styleContainer: props.back
		? { width: 135, height: 60, left: 0, position: 'absolute', bottom: 0 }
		: { width: 135, height: 60, right: 0, position: 'absolute', bottom: 0 }
})) <{ back?: boolean }>``


export const GooglePlaces = styled(GooglePlacesAutocomplete).attrs(() => ({
	placeholder: 'Endereço ou Nome do Estabelecimento...',
	fetchDetails: true,
	nearbyPlacesAPI: 'GooglePlacesSearch',
	suppressDefaultStyles: true,
	GooglePlacesDetailsQuery: {
		fields: 'geometry'
	},
	query: {
		key: Constants.manifest?.extra?.PLACES_API as string,
		language: 'pt',
		components: 'country:br'
	},
	textInputProps: {
		style: {
			backgroundColor: colors.COLOR_WHITE,
			alignSelf: 'center',
			width: WINDOW_WIDTH * 0.9,
			height: WINDOW_HEIGHT > 680 ? 60 : 45,
			padding: 10,
			borderRadius: 10,
			marginTop: 30,
			marginBottom: 10,
			color: colors.COLOR_SECUNDARY_BLACK,
			fontFamily: 'Nunito_Regular',
			fontSize: 15
		},
		selectionColor: colors.COLOR_YELLOW,
	},
	styles: {
		row: {
			backgroundColor: colors.COLOR_SECUNDARY_WHITE,
			alignSelf: 'center',
			justifyContent: 'center',
			width: WINDOW_WIDTH * 0.8,
			paddingHorizontal: 10,
			height: 50,
			borderRadius: 5,
			marginBottom: 10,
			color: colors.COLOR_RED,
			fontFamily: 'Nunito_Light',
			fontSize: 15
		}
	}
}))`
	`
