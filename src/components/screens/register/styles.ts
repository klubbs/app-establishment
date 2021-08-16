import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';
import { Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { DoubleArrowRightIcon } from '../../../../assets/icons/double_arrow_right_icon';
import Button from '../../component/button';

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

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    height: ${`${WINDOW_HEIGHT}px`};
    width:100%;
`

const InputBase = styled(InputWithIcon)`
    width:90%;
    height:60px;
    margin-bottom: 30px;
`

export const Name = styled(InputBase).attrs(() => ({
    placeholder: 'Nome fantasia do estabelecimento',
    keyboardType: 'default'
}))`
`

export const Cnpj = styled(InputBase).attrs(() => ({
    placeholder: 'CNPJ',
    keyboardType: 'numeric'
}))`
`

export const Mail = styled(InputBase).attrs(() => ({
    placeholder: 'Email do estabelecimento',
    keyboardType: 'email-address'
}))`
`

export const Phone = styled(InputBase).attrs(() => ({
    placeholder: 'Telefone do estabelecimento',
    keyboardType: 'numeric'
}))`
`

export const NameResponsible = styled(InputBase).attrs(() => ({
    placeholder: 'Nome do responsável legal',
    keyboardType: 'default'
}))`
`

export const Cpf = styled(InputBase).attrs(() => ({
    placeholder: 'CPF',
    keyboardType: 'numeric'
}))`
`

export const Description = styled(InputWithIcon).attrs(() => ({
    placeholder: 'Descreva o estabelecimento para os usuários!',
    multiline: true
}))`
    width:90%;
    height:100px;
`

export const ArrowIcon = styled(DoubleArrowRightIcon).attrs((props: { mode: any }) => ({
    width: 20,
    height: 20,
    fill: colors.COLOR_YELLOW,
    up: props.mode === 'up'
}))`
    transform: ${props => props.up ? 'rotate(-90deg)' : 'rotate(90deg)'};
    bottom:${props => props.up ? '30px' : 0}
`

export const CompleteButton = styled(Button).attrs(() => ({
    text: 'Prosseguir',
    styleContainer: { width: '90%', height: 60, top: 90 }
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
            height: 60,
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
