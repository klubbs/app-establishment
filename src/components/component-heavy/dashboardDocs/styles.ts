import styled from 'styled-components/native'
import colors from '../../../../assets/constants/colors';
import Button from '../../component/button';



export const Wrapper = styled.ScrollView.attrs({
	contentContainerStyle: { justifyContent: 'center', alignItems: 'center', flex: 1 }
})`
    flex: 1;
    background-color: ${colors.COLOR_SECUNDARY_BLACK};
`

export const ValueSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_80};
  font-size:15px;
  margin-bottom: 40px;
  font-family:'Nunito_Light';
`

export const RefreshSubtitle = styled.Text`
  color:${colors.COLOR_WHITE_40};
  font-size:12px;
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
