import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import { PickerTimeStartEnd } from '../../component/picker_time_start_end'
import { IEstablishmentRegister } from './interfaces'
import { PickerModelBusiness } from '../../component/picker_model_business'
import { useNavigation } from '@react-navigation/native'
import { RegisterService } from '../../../services/register_service'
import { isEmpty, nameof } from '../../../utils/extensions/object_extensions'
import { Flash } from '../../../utils/flash'
import { Modalize } from 'react-native-modalize';
import {
	Wrapper,
	Description,
	Phone,
	Mail,
	Cnpj,
	Name,
	Container,
	GooglePlaces,
	NameResponsible,
	Cpf,
	ArrowIcon,
	CompleteButton,
	KeyboardWrapper,
	Password,
	Location,
	LocationAddress
} from './styles'
export const RegisterScreen: React.FC = () => {
	const navigation = useNavigation()

	const [keyboardAvoidingViewEnabled, setKeyboardAvoidingViewEnabled] = useState<boolean>(true)
	const [invalidFields, setInvalidFields] = useState({
		name: false,
		phone: false,
		mail: false,
		description: false,
		cnpj: false,
		closedAt: false,
		openedAt: false,
		ownerName: false,
		ownerCpf: false,
		modelBusinessId: false,
		password: false,
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
		address: 'Marileeene'
	})

	const validToRegister = () => {
		const valid = RegisterService.validate(establishment)

		if (!isEmpty(valid)) {
			Flash.invalidFields()

			let tmpState = invalidFields as any

			for (var key in valid) {
				tmpState[key] = true
			}

			if (valid.hasOwnProperty(nameof<IEstablishmentRegister>('password'))) {
				Flash.customMessage(valid.password as string, 'Campo inválido')
			}

			setInvalidFields({ ...tmpState })

			return
		}

		navigation.navigate('Contract', establishment)
	}

	const onFocusToggle = (enableKeyboard: boolean, keyEstablishment: string) => {
		setKeyboardAvoidingViewEnabled(enableKeyboard)

		//as any is trick for not show red line error
		let tmpData = invalidFields as any

		tmpData[keyEstablishment] = false

		setInvalidFields(tmpData)
	}

	function handlerPlace(data: any, details: any) {
		console.log('meu pau')
		setEstablishment({
			...establishment,
			address: data.description,
			long: details.geometry.location.lng,
			lat: details.geometry.location.lat
		})
	}

	return (
		<Wrapper>
			<KeyboardWrapper enabled={keyboardAvoidingViewEnabled}>
				<Container>
					<Name
						value={establishment.name}
						invalid={invalidFields.name}
						setValue={(e: string) => setEstablishment({ ...establishment, name: e })}
						onFocus={() => onFocusToggle(false, nameof<IEstablishmentRegister>('name'))}
					/>

					<Phone
						value={establishment.phone}
						invalid={invalidFields.phone}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, phone: e })
						}
						onFocus={() =>
							onFocusToggle(false, nameof<IEstablishmentRegister>('phone'))
						}
					/>

					<Mail
						value={establishment.mail}
						invalid={invalidFields.mail}
						setValue={(e: string) => setEstablishment({ ...establishment, mail: e })}
						onFocus={() => onFocusToggle(false, nameof<IEstablishmentRegister>('mail'))}
					/>

					<Password
						value={establishment.password}
						invalid={invalidFields.password}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, password: e })
						}
						onFocus={() =>
							onFocusToggle(true, nameof<IEstablishmentRegister>('password'))
						}
					/>

					<Cnpj
						value={`${establishment.cnpj}`}
						invalid={invalidFields.cnpj}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, cnpj: e })
						}
						onFocus={() => onFocusToggle(true, nameof<IEstablishmentRegister>('cnpj'))}
					/>

					<NameResponsible
						value={`${establishment.ownerName}`}
						invalid={invalidFields.ownerName}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, ownerName: e })
						}
						onFocus={() =>
							onFocusToggle(true, nameof<IEstablishmentRegister>('ownerName'))
						}
					/>

					<Cpf
						value={`${establishment.ownerCpf}`}
						invalid={invalidFields.ownerCpf}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, ownerCpf: e })
						}
						onFocus={() =>
							onFocusToggle(true, nameof<IEstablishmentRegister>('ownerCpf'))
						}
					/>

					<ArrowIcon />
				</Container>
			</KeyboardWrapper>
			<Container>
				<ArrowIcon mode={'up'} />
				{/* <GooglePlaces onPress={(data, details = null) => handlerPlace(data, details)} /> */}

				{/* <Location onPress={() => modalizeRef.current?.open()}>
						<LocationAddress>{establishment.address}</LocationAddress>
					</Location> */}

				<Description
					value={establishment.description}
					invalid={invalidFields.description}
					setValue={(e: string) => setEstablishment({ ...establishment, description: e })}
					onFocus={() =>
						onFocusToggle(true, nameof<IEstablishmentRegister>('description'))
					}
				/>

				<PickerTimeStartEnd
					startValue={establishment.openedAt}
					endvalue={establishment.closedAt}
					onChangeCbEnd={(e: Date) => setEstablishment({ ...establishment, closedAt: e })}
					onChangeCbStart={(e: Date) =>
						setEstablishment({ ...establishment, openedAt: e })
					}
				/>

				<PickerModelBusiness
					onChangeCb={(e: string) =>
						setEstablishment({ ...establishment, modelBusinessId: e })
					}
				/>

				<GooglePlaces
					onPress={(data, details = null) => handlerPlace(data, details)}
				/>

				<CompleteButton onPress={() => validToRegister()} />
			</Container>
		</Wrapper>
	)
}
