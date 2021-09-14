import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { RegisterService } from '../../../services/register_service'
import { isEmpty, nameof } from '../../../utils/extensions/object_extensions'
import { Flash } from '../../../utils/flash'
import { PickerModelBusiness } from '../../component/picker_model_business'
import { PickerTimeStartEnd } from '../../component/picker_time_start_end'
import { IEstablishmentRegister } from './interfaces'
import {
	Cnpj, CompleteButton, Cpf, Description, GooglePlaces, Mail, Name, NameResponsible, Password, Phone, Wrapper, Question, Container, AnimatedContainer, BottomContainer
} from './styles'
import * as Haptic from 'expo-haptics';
import { Spinner } from '../../component/spinner'


export const RegisterScreen: React.FC = () => {
	const navigation = useNavigation()

	const [loading, setLoading] = useState(false)
	const [activeMessage, setActiveMessage] = useState('Qual o nome do estabelecimento?')
	const [activeFields, setActiveFields] = useState({
		name: [true, 'Qual o nome do estabelecimento?'],
		phone: [false, 'Telefone de contato do estabelecimento?'],
		cnpj: [false, 'CNPJ do estabelecimento:'],
		ownerName: [false, 'Nome do responsável pelo estabelecimento ?'],
		ownerCpf: [false, 'CPF do responsável pelo estabelecimento ?'],

		modelBusinessId: [false, 'Em qual categoria se enquadra ?'],
		description: [false, 'Como quer descrever o estabelecimento para os usuários'],
		closedAt: [false, 'Que horas o estabelecimento abre e fecha:'],
		lat: [false, 'Onde os usuários podem te encontrar'],

		mail: [false, 'Qual será seu e-mail de login:'],
		password: [false, 'Pense em uma senha:'],
	})
	const [establishment, setEstablishment] = useState<IEstablishmentRegister>({
		name: '',
		phone: '',
		mail: '',
		description: '',
		cnpj: '',
		closedAt: new Date(Date.now()),
		openedAt: new Date(Date.now()),
		ownerName: '',
		ownerCpf: '',
		modelBusinessId: '',
		password: '',
		lat: 0,
		long: 0,
		address: ''
	})

	function handlerPlace(data: any, details: any) {
		setEstablishment({
			...establishment,
			address: data.description,
			long: details.geometry.location.lng,
			lat: details.geometry.location.lat
		})
	}

	async function handleNext(isBack: boolean) {
		try {
			setLoading(true)
			let activeKeyIndex = -1;

			//Captura o index do objeto que esta sendo exibido na tela
			Object.values(activeFields)
				.forEach((item, index) => {
					if (item.includes(true)) {
						activeKeyIndex = index
					}
				})

			const propertiesInArray = Object.getOwnPropertyNames(activeFields)
			//Captura a propriedade do campo atual exibido na tela
			let property = propertiesInArray[activeKeyIndex] as keyof IEstablishmentRegister
			//Captura a propriedade do próximo campo que será exibido na tela
			const newProperty = propertiesInArray[isBack ? --activeKeyIndex : ++activeKeyIndex] as keyof IEstablishmentRegister

			if (!isBack) {

				let customProperty: Object | null = null;

				if (property === 'closedAt') {
					property = nameof<IEstablishmentRegister>('closedAt')
					customProperty = {
						closedAt: establishment.closedAt,
						openedAt: establishment.openedAt
					}
				} else if (property === 'address') {
					property = nameof<IEstablishmentRegister>('lat')
					customProperty = { lat: establishment.lat, long: establishment.long }
				}

				console.log(property)

				const isValid = await RegisterService
					.ValidateProperty(customProperty ?? establishment[property], property);

				if (!isEmpty(isValid)) {
					Flash.customMessage(
						"Preencha o campo corretamente",
						"Tem algo errado com esse campo", 'WARNING'
					)
					Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning);
					return;
				}
			}

			const tmp = activeFields;

			//Alterar a visualização para os próximosque seram exibidos
			tmp[property][0] = false;
			tmp[newProperty][0] = true;

			setActiveMessage(tmp[newProperty][1])
			setActiveFields({ ...tmp })

		} catch (error) {

		} finally {
			setLoading(false)
		}


	}


	return (
		<Wrapper>
			<Container>
				<Question>{activeMessage}</Question>

				{
					activeFields.name[0] &&
					<Name
						value={establishment.name}
						invalid={false}
						// invalid={invalidFields.name}
						setValue={(e: string) => setEstablishment({ ...establishment, name: e })}
					/>
				}

				{
					activeFields.phone[0] &&
					<Phone
						value={establishment.phone}
						invalid={false}
						onChangeText={(e: string) => setEstablishment({ ...establishment, phone: e })}
					/>
				}

				{
					activeFields.mail[0] &&
					<Mail
						value={establishment.mail}
						invalid={false}
						setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
					/>
				}

				{
					activeFields.password[0] &&
					<Password
						value={establishment.password}
						invalid={false}
						setValue={(e: string) => setEstablishment({ ...establishment, password: e })}
					/>
				}

				{
					activeFields.cnpj[0] &&
					<Cnpj
						value={`${establishment.cnpj}`}
						invalid={false}
						onChangeText={(e: string) => setEstablishment({ ...establishment, cnpj: e })}
					/>
				}

				{
					activeFields.ownerName[0] &&
					<NameResponsible
						value={`${establishment.ownerName}`}
						invalid={false}
						setValue={(e: string) => setEstablishment({ ...establishment, ownerName: e })}
					/>
				}

				{
					activeFields.ownerCpf[0] &&
					<Cpf
						value={`${establishment.ownerCpf}`}
						invalid={false}
						onChangeText={(e: string) => setEstablishment({ ...establishment, ownerCpf: e })}
					/>
				}

				{
					activeFields.description[0] &&
					<Description
						value={establishment.description}
						invalid={false}
						setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
					/>
				}

				{
					activeFields.closedAt[0] &&
					<PickerTimeStartEnd
						startValue={establishment.openedAt}
						endvalue={establishment.closedAt}
						onChangeCbEnd={(e: Date) => setEstablishment({ ...establishment, closedAt: e })}
						onChangeCbStart={(e: Date) =>
							setEstablishment({ ...establishment, openedAt: e })
						}
					/>

				}

				{
					activeFields.modelBusinessId[0] &&
					<PickerModelBusiness
						onChangeCb={(e: string) =>
							setEstablishment({ ...establishment, modelBusinessId: e })
						}
					/>
				}

				{
					activeFields.address[0] &&
					<GooglePlaces
						onPress={(data, details = null) => handlerPlace(data, details)}
					/>

				}

				<BottomContainer>
					{
						!activeFields.name[0] &&
						<CompleteButton back={!activeFields.name[0]} onPress={() => handleNext(true)} />
					}
					<CompleteButton onPress={() => handleNext(false)} />
				</BottomContainer>
			</Container>
			<Spinner loading={loading} />

		</Wrapper >
	)
}
