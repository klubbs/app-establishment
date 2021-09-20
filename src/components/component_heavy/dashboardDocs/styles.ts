import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';



export const Wrapper = styled.View`
    flex: 1;
    justify-content:space-around;
    align-items: center;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const ValueSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:15px;
  font-family:'Nunito_Light';
`


export const DocsButton = styled(Button).attrs((props) => ({
	text: 'Comprovar documentação',
	styleContainer: {
		width: '60%', height: '15%',
		backgroundColor: colors.COLOR_YELLOW
	}
}))`
`
