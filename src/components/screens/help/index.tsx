import React, { useContext } from 'react';
import { Linking, StatusBar } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { MenuItem } from '../../component/menuItem';

import { Wrapper, ContainerScroll } from './styles';
import { AuthContext } from '../../../contexts/auth-context';

export const HelpScreen: React.FC = () => {
	const { establishment } = useContext(AuthContext)


	return (
		<Wrapper>
			<StatusBar
				backgroundColor={colors.COLOR_WHITE}
				barStyle={'dark-content'}
				animated={true} />
			<ContainerScroll>
				<MenuItem
					key={'0'}
					description='Acesse o nosso tutorial'
					text='Dúvidas'
					icon='book-open'
					cb={
						() => Linking
							.openURL('https://enshrined-bubbler-645.notion.site/Klubbs-para-estabelecimentos-3052e0851f824962882da94b7705d02d')}
				/>

				<MenuItem
					key={'1'}
					text='Fale conosco'
					description='Envie sugestões ou receba ajuda'
					icon='mail'
					cb={
						() => Linking
							.openURL('mailto: suporteestabelecimentos@klubbs.com.br?subject=Oi, Klubbs tenho uma sugestão!')}
				/>

				<MenuItem
					key={'2'}
					text='Termos e condições'
					description='Termos e condições do serviço'
					icon='key'
					cb={() => Linking
						.openURL('https://enshrined-bubbler-645.notion.site/Termos-e-condi-es-47a39b695c174d059c49e49e6b657848')
					}
				/>
				<MenuItem
					key={'3'}
					text='Políticas de privacidade'
					description='Políticas de privacidade do serviço'
					icon='shield'
					cb={() => Linking
						.openURL('https://enshrined-bubbler-645.notion.site/Privacy-Policy-klubbs-4be747dae70a451d805540db6fb24957')
					}
				/>
				<MenuItem
					key={'4'}
					text='Cancelar conta'
					description='Podemos te ajudar com isso'
					icon='triangle'
					cb={() => Linking
						.openURL(`mailto: suportecontas@klubbs.com.br?subject=Sou o estabelecimento( ${establishment?.name} ) e gostaria de cancelar minha conta, meu e-mail é ${establishment?.mail}!`)
					}
				/>

			</ContainerScroll>
		</Wrapper>
	);
}
