import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext } from './styles'
import { ContractScreenProps } from '../../../settings/@types/iauth_stack_params'

export const ContractScreen: React.FC<ContractScreenProps> = ({ route }) => {
	const navigation = useNavigation()

	const [accepted, setAccepted] = useState<boolean>(false)

	useEffect(() => { }, [])

	return (
		<Wrapper>
			<Container>
				A sua privacidade é importante para nós. É política da Klubbs respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nossos aplicativos( "Klubbs" ,"nosso" ou "nós") para dispositivos moveis, e outros sites que possuímos e operamos.

				Para que a Plataforma possa adequadamente oferecer os Serviços é necessário que ela tenha acesso a determinadas informações sobre os Usuários, os “Dados”.

				Não é possível oferecer as funcionalidades da Plataforma sem ter acesso a esses Dados. Ou seja, o tratamento dos Dados é condição para utilizar a Plataforma.

				O Usuário, ao aceitar os termos desta política de privacidade (“Política”), concorda expressamente em fornecer apenas Dados verdadeiros, atuais e precisos e em não deturpar a sua identidade de qualquer forma no acesso e utilização da Plataforma e/ou na utilização dos Serviços.

				Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

				Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

				Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

				Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

				O uso continuado de nosso app será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.

				**QUAIS DADOS COLETAMOS E TRATAMOS ?**

				O Usuário não poderá utilizar a Plataforma sem realizar cadastro. Sem um cadastro na Plataforma, o Usuário não terá acesso as funcionalidades consideradas CORE do aplicativo

				A Klubbs recebe ou de outra forma coleta 2 (dois) tipos de informações relacionadas aos Usuários: (A) informações de cadastro ; e (B) informações relacionadas ao dispositivo pelo qual o Usuário utiliza a Plataforma, bem como informações relacionadas ao uso da Plataforma pelo Usuário.

				A. Dados de Cadastro. São as informações solicitadas do Usuário ao se cadastrar na Plataforma para registro.

				- Nome
				- Telefone celular
				- Endereço de e-mail
				- Nome de usuário
				- Dados de pagamento (Quando solicitados)
				- CNPJ (Quando solicitados)

				B. Dados sobre Dispositivos. São informações coletadas por meio de tecnologias como cookies, pixels, identificadores, entre outras, quando os Usuários interagem com a Plataforma, sejam eles cadastrados ou não. Entre essas informações estão:

				- Informações sobre o dispositivo móvel ou computador
				- Telas visitadas no app
				- Duração da visita
				- Caminhos de visualização do app
				- Visualizações na tela
				- Geolocalização

				Nós coletamos informações de comportamento de navegação e sobre sua interação em nossa plataforma ( "Klubbs" ) com a finalidade de otimizar as funcionalidades e melhorar a qualidade do conteúdo disponibilizado, tudo conforme o nosso legítimo interesse. Para tanto, utilizamos o *[Google Analytics](https://policies.google.com/technologies/partner-sites)* em diversos de fluxos utilização.

				**POR QUE COLETAMOS E TRATAMOS ALGUNS DESSES DADOS?**

				E-mail

				- Para enviar código de atualização de dados referente a conta
				- Login na plataforma
				- Comunicação da Klubbs com o Usuário

				Telefone

				- Comunicação da Klubbs com o Usuário

				Nome de usuário

				- Para sua indetificação dentro da plataforma

				Dados sobre o dispositivo

				- Análise de conversão e experiência do usuário na Plataforma
				- Personalização da Plataforma para Usuário
				- Análise de conversão, experiência do usuário na Plataforma e marketing

				**DADOS QUE SÃO PROTEGIDOS PELA LGPD**

				A Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018) veio para proteger os dados pessoais e dados pessoais sensíveis da pessoa física no Brasil, também chamada de titular de dados.

				De acordo com a LGPD, “dado pessoal” é qualquer dado que identifique ou torne identificável uma pessoa física. E o “dado pessoal sensível” é aquele que, por sua natureza, diz respeito a informações que merecem um cuidado maior, principalmente para proteção contra discriminações.

				A LGPD coloca nessa classificação de dados pessoais sensíveis dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual e dado genético ou biométrico, quando vinculados a uma pessoa física.

				**COMO ARMAZENAMOS E PROTEGEMOS OS SEUS DADOS**

				Nós armazenamos seus dados de forma segura em data centers de terceiros localizados no Brasil e nos Estados Unidos da América.

				**POR QUANTO TEMPO AS INFORMAÇÕES SÃO ARMAZENADAS?**

				A Klubbs esforça-se para garantir que os dados pessoais sejam mantidos tão atualizados quanto possível e que dados irrelevantes ou excessivos sejam excluídos ou tornados anônimos assim que possível.

				Geralmente retemos dados pessoais pelo tempo necessário para satisfazer a finalidade para a qual foram coletados. Caso você não nos solicite a exclusão, seus dados pessoais fornecidos durante a etapa de recrutamento e seleção permanecerão armazenados conosco ou até sejam atingidas as finalidades apresentadas nessa Política de Privacidade, de acordo com a legislação vigente aplicável no Brasil.

				> Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.

				marketing@klubbs.com.br

				**SEGURANÇA DA INTERNET**

				Nós nos esforçaremos para proteger a privacidade da conta de nossos Usuários e outros Dados que guardarmos em nossos registros, contudo, nós não podemos garantir a mais completa segurança de nossos Usuários. O acesso ou uso não autorizado, a falha do hardware ou software e outros fatores podem comprometer a segurança das informações do usuário a qualquer tempo.

				NESTE SENTIDO, A TRANSMISSÃO DE INFORMAÇÕES PELA INTERNET NÃO É COMPLETAMENTE SEGURA POR DIVERSOS FATORES, INCLUINDO FATORES DE REDE E DE OPERAÇÃO, E A KLUBBS NÃO TEM COMO GARANTIR A COMPLETA SEGURANÇA DOS DADOS TRANSMITIDOS PELOS USUÁRIOS À PLATAFORMA. APESAR DE FAZERMOS O NOSSO MELHOR PARA PROTEGER OS DADOS DOS USUÁRIOS, NÓS NÃO PODEMOS GARANTIR A SEGURANÇA DOS DADOS TRANSMITIDOS AO NOSSO SITE. QUALQUER TRANSMISSÃO É DE EXCLUSIVA RESPONSABILIDADE DOS USUÁRIOS, OS QUAIS, AO CONCORDAR COM A PRESENTE POLÍTICA RECONHECEM E ASSUMEM EXPRESSAMENTE TAL RESPONSABILIDADE.

				Uma vez recebidos os Dados do Usuário pela Plataforma, nós nos comprometemos a assegurar que tais estarão seguras no ambiente da Plataforma. Para prevenir o acesso ou divulgação não autorizada dos Dados do Usuário, nós implementamos procedimentos físicos, eletrônicos e administrativos adequados para assegurar e proteger as informações que coletamos. Adotamos protocolo HTTPS (protocolo de comunicação segura) com certificado digital no site que garante a comunicação segura entre os usuários e nossos servidores. Toda comunicação é criptografada e os Dados do Usuário são armazenados nos nossos bancos de dados utilizando as técnicas mais atuais de segurança e proteção da informação.

				Klubbs © 2021

			</Container>

			<ContainerSwitch>
				<Subtitle>Estou ciente e de acordo com os termos</Subtitle>
				<SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
			</ContainerSwitch>
			{accepted && (
				<ButtonNext onPress={() => navigation.navigate('RegisterCode', route.params)} />
			)}
		</Wrapper>
	)
}
