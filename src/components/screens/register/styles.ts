import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import { Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { DoubleArrowRightIcon } from '../../../../assets/icons/double_arrow_right_icon';
import Button from '../../component/button';
import { InputWithMask } from '../../component/input-with-mask';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export const Wrapper = styled.ScrollView.attrs(() => ({
	showsVerticalScrollIndicator: false,
	decelerationRate: 'fast',
	snapToInterval: WINDOW_HEIGHT,
	contentContainerStyle: { justifyContent: 'center', alignItems: 'center' }
}))`
    flex: 1;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const KeyboardWrapper = styled.KeyboardAvoidingView.attrs(() => ({
	behavior: 'position'
}))`
    width:100%;
`

export const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    height: ${`${WINDOW_HEIGHT}px`};
    width:100%;
`

const InputBase = styled(InputWithIcon).attrs((props: { invalid: boolean }) => ({
	placeholderTextColor: props.invalid ? colors.COLOR_RED : colors.COLOR_BLACK50,
})) <{ invalid: boolean }>`
    width:90%;
    height:${(WINDOW_HEIGHT > 680) ? '60px' : '45px'};
    margin-bottom: 30px;
    border-color: ${props => props.invalid ? colors.COLOR_RED : 'transparent'};
    border-width: ${props => props.invalid ? '2px' : '0'};
`

const InputMaskBase = styled(InputWithMask).attrs((props: { invalid: boolean }) => ({
	placeholderTextColor: props.invalid ? colors.COLOR_RED : colors.COLOR_BLACK50,
})) <{ invalid: boolean }>`
    width:90%;
    height:${(WINDOW_HEIGHT > 680) ? '60px' : '45px'};
    margin-bottom: 30px;
    border-color: ${props => props.invalid ? colors.COLOR_RED : 'transparent'};
    border-width: ${props => props.invalid ? '2px' : '0'};
`

export const Name = styled(InputBase).attrs((props) => ({
	placeholder: 'Nome fantasia do estabelecimento',
	keyboardType: 'default'
}))`
`

export const Cnpj = styled(InputMaskBase).attrs(() => ({
	placeholder: 'CNPJ',
	keyboardType: 'numeric',
	type: 'cnpj'
}))`
`

export const Mail = styled(InputBase).attrs(() => ({
	placeholder: 'Email',
	keyboardType: 'email-address'
}))`
`

export const Phone = styled(InputMaskBase).attrs(() => ({
	placeholder: 'Telefone do estabelecimento',
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
	multiline: true
}))`
    width:90%;
    margin-bottom:30px;
    height:100px;
`

export const ArrowIcon = styled(DoubleArrowRightIcon).attrs((props: { mode?: string }) => ({
	width: 20,
	height: 20,
	fill: colors.COLOR_YELLOW,
	up: props.mode === 'up'
})) <{ mode?: string }>`
    transform: ${props => props.up ? 'rotate(-90deg)' : 'rotate(90deg)'};
    bottom:${props => props.up ? '30px' : 0}
`

export const CompleteButton = styled(Button).attrs(() => ({
	text: 'Prosseguir',
	styleContainer: { width: '90%', height: 60, top: '5%' }
}))``


export const GooglePlaces = styled(GooglePlacesAutocomplete).attrs(() => ({
	placeholder: 'Endereço ou Nome do Estabelecimento...',
	fetchDetails: true,
	GooglePlacesDetailsQuery: { fields: 'geometry' },
	nearbyPlacesAPI: 'GooglePlacesSearch',
	query: { key: Constants.manifest?.extra?.PLACES_API as string, language: 'pt', components: 'country:br' },
	suppressDefaultStyles: true,
	textInputProps: {
		style: {
			backgroundColor: colors.COLOR_WHITE,
			alignSelf: 'center',
			width: WINDOW_WIDTH * 0.9,
			height: WINDOW_HEIGHT > 680 ? 60 : 45,
			padding: 10,
			borderRadius: 10,
			marginBottom: 30,
			color: colors.COLOR_SECUNDARY_BLACK,
			fontFamily: 'Nunito_Light',
			fontSize: 15
		},
		selectionColor: colors.COLOR_YELLOW
	}
}))`
`
