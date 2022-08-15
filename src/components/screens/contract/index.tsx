import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Linking } from 'react-native'
import {
	Wrapper,
	ContainerSwitch,
	Subtitle, SwitchContract, ButtonNext, Terms, BoldTerms, ContainerScroll, Tutorial,
	WrapperSwitch
} from './styles'
import { ContractScreenProps } from '../../../settings/@types/iauth-stack-params'

export const ContractScreen: React.FC<ContractScreenProps> = ({ route }) => {
	const navigation = useNavigation()

	const [accepted, setAccepted] = useState<boolean>(false)

	return (
		<Wrapper>
			<ContainerScroll>
				<BoldTerms>
					Tiramos a parte complicada para você focar no que realmente importa:
				</BoldTerms>

				<TouchableOpacity
					onPress={() => Linking
						.openURL('https://enshrined-bubbler-645.notion.site/Klubbs-para-estabelecimentos-3052e0851f824962882da94b7705d02d')}>
					<Tutorial>Acessar resumo</Tutorial>
				</TouchableOpacity>

			</ContainerScroll>
			<ContainerSwitch>
				<TouchableOpacity
					onPress={() => Linking.openURL('https://enshrined-bubbler-645.notion.site/Termos-e-condi-es-47a39b695c174d059c49e49e6b657848')}
				>
					<Terms>Acessar os termos de uso</Terms>
				</TouchableOpacity>

				<WrapperSwitch>
					<Subtitle>Estou ciente e de acordo com os termos</Subtitle>
					<SwitchContract value={accepted} onValueChange={() => setAccepted(!accepted)} />
				</WrapperSwitch>
			</ContainerSwitch>
			{accepted && (
				<ButtonNext onPress={() => navigation.navigate('RegisterCode', route.params)} />
			)}
		</Wrapper>
	)
}
