import { color } from 'react-native-reanimated';
import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import { InputWithIcon } from '../../component/input-with-icon';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

const InputBase = styled(InputWithIcon)`
    width:90%;
    height:60px;
    margin-bottom: 30px;
`

export const Name = styled(InputBase).attrs(() => ({
    placeholder: 'Nome fantasia'
}))`
`

export const Cnpj = styled(InputBase).attrs(() => ({
    placeholder: 'Cnpj',
    keyboardType: 'numeric'
}))`
`

export const Mail = styled(InputBase).attrs(() => ({
    placeholder: 'Email responsável',
    keyboardType: 'email-address'
}))`
`

export const Phone = styled(InputBase).attrs(() => ({
    placeholder: 'Telefone',
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
