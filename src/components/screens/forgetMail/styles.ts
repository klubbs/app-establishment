import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const Input = styled.Text`
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 15px;
    font-family:'Nunito_Bold';
    color: ${colors.COLOR_WHITE};
    text-align: center;
    margin:0 5px;
    margin-top:50px;
    margin-bottom: 50px;
    background-color: ${colors.COLOR_WHITE_80};
`

export const Subtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  margin-top:120px;
  font-size:16px;
  font-family:'Nunito_Light';
`

export const Email = styled.Text`
  color:${colors.COLOR_YELLOW};
  font-size:16px;
  font-family:'Nunito_Light';
`

export const RegisterButton = styled(Button).attrs(() => ({
	text: 'Registrar',
	styleContainer: { width: '90%', height: 60 }
}))`
`
