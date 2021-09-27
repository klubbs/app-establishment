import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Wrapper, Container, ContainerSwitch, Subtitle, SwitchContract, ButtonNext, Terms, BoldTerms, ContainerScroll, LightTerms } from './styles'
import { ContractScreenProps } from '../../../settings/@types/iauth_stack_params'

export const ContractScreen: React.FC<ContractScreenProps> = ({ route }) => {
	const navigation = useNavigation()

	const [accepted, setAccepted] = useState<boolean>(false)

	useEffect(() => { }, [])

	return (
		<Wrapper>
			<ContainerScroll>
				<Container>
					<Terms>
						<BoldTerms>De forma a ajudar, decidimos destacar os principais pontos ao utilizar nosso app:</BoldTerms>{'\n'}{'\n'}

						<LightTerms>
							Isto é apenas um pequeno resumo de como funciona o Klubbs para estabelecimentos, fique calmo que não iremos cobrar nada de você a menos que esteja ciente.
						</LightTerms>{'\n'}{'\n'}

						<BoldTerms>Criar cupons de desconto :</BoldTerms>{'\n'}{'\n'}

						Você terá direito a criar cupons de desconto em nossa plataforma, e o que isso quer dizer ?{'\n'}{'\n'}
						Ao criar um cupom de desconto em nossa plataforma (Adicionando as regras que você, e somente você irá aplicar ao seu cupom, a data de validade do cupom e a % OFF que seu cliente terá de desconto), você esta habilitando que seu cupom seja vinculado a influenciadores, e que com isso possam divulgar seu estabelecimento em suas redes sociais.{'\n'}{'\n'}

						Estará habilitando também um usuário que encontre seu estabelecimento em nossa plataforma Klubbs, consiga pegar um cupom de desconto para utilizar sem intermédios de um influenciador .{'\n'}{'\n'}
						<LightTerms>
							Importante: Vai da escolha do influenciador, caso ache que este cupom de desconto vá de encontro com seu público divulgar em suas redes.
						</LightTerms>
						{'\n'}{'\n'}<BoldTerms>Validar cupons por QR Code :</BoldTerms>{'\n'}{'\n'}

						Cada cupom scanneado é contabilizado uma venda com a taxa fixa de
						<BoldTerms> R$5,00</BoldTerms> na fatura mensal do estabelecimento (Não incluso planos caso adquiridos).{'\n'}{'\n'}

						É de responsabilidade do estabelecimento validar os cupons de desconto dos seus clientes. O que isso quer dizer ?{'\n'}{'\n'}
						Caso um estabelecimento tenha um cupom vinculado a um influenciador, e que com isso faça divulgação em suas redes sociais , e de má-fé não valide cupons para venda está restringindo os termos de política desta plataforma e com isso quebrando o contrato firmado por ambas as partes. Estando sujeito a ações legais.{'\n'}{'\n'}

						Para que o ecossistema Klubbs funcione de maneira esperada, é necessário que o estabelecimento cumpra seu papel validando cupons, com isso os influenciadores se mantém no direito de divulgar tais estabelecimentos e recebendo comissões por isso, e também usuários se sintam no dever de apresentar seus cupons klubbs

						{'\n'}{'\n'}<BoldTerms>Visualizar transações de vendas :</BoldTerms>{'\n'}{'\n'}

						É possível visualizar no painel do Klubbs para Estabelecimentos, todas as transações de venda feita pelo estabelecimento, assim como o influenciador que fez a divulgação do cupom, a hora da venda , taxa cobrada e qual cupom seu foi utilizado para a venda

						{'\n'}{'\n'}<LightTerms>Klubbs © 2021</LightTerms>
					</Terms>
				</Container>
			</ContainerScroll>
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
