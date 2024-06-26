import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { RegisterService } from "../../../services/register-service";
import { isEmpty, nameof } from "../../../utils/extensions/object_extensions";
import { Flash } from "../../../utils/flash";
import { PickerModelBusiness } from "../../component/picker_model_business";
import { PickerTimeStartEnd } from "../../component/picker_time_start_end";
import { IEstablishmentRegister } from "./interfaces";
import * as Haptic from "expo-haptics";
import { Spinner } from "../../component/spinner";
import { useAnimationState } from "moti";
import {
	Cnpj,
	CompleteButton,
	Cpf,
	Description,
	GooglePlaces,
	Mail,
	Name,
	NameResponsible,
	Password,
	Phone,
	Wrapper,
	Question,
	Container,
	AnimatedContainer,
	BottomContainer,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { IAuthStackParams } from "../../../settings/@types/iauth-stack-params";

const useFadeInDown = () => {
	return useAnimationState({
		from: {
			opacity: 0,
			right: -50,
		},
		to: {
			opacity: 1,
			right: 0,
		},
	});
};

export const RegisterScreen: React.FC = () => {
	const navigation = useNavigation<StackNavigationProp<IAuthStackParams>>();
	const fadeInDown = useFadeInDown();

	const [loading, setLoading] = useState(false);
	const [activeFields, setActiveFields] = useState({
		name: [true, "Qual o nome do estabelecimento:"],
		phone: [false, "Telefone de contato do estabelecimento:"],
		cnpj: [false, "CNPJ do estabelecimento:"],
		ownerName: [false, "Nome do responsável pelo estabelecimento :"],
		ownerCpf: [false, "CPF do responsável pelo estabelecimento :"],
		businessCategoryId: [false, "Em qual categoria se enquadra :"],
		//O componente de horas por si só não permite horários menores que o inicio
		closedAt: [false, "Que horas o estabelecimento abre e fecha:"],
		//Latitude depende de longitude, validar somente um aqui já funciona
		lat: [false, "Onde fica o estabelecimento:"],
		mail: [false, "Qual será seu e-mail de login:"],
		password: [false, "Coloque sua melhor senha:"],
	});
	const [activeMessage, setActiveMessage] = useState(activeFields.name[1]);
	const [establishment, setEstablishment] = useState<IEstablishmentRegister>({
		name: "",
		phone: "",
		mail: "",
		cnpj: "",
		closedAt: new Date(Date.now()),
		openedAt: new Date(Date.now()),
		ownerName: "",
		ownerCpf: "",
		businessCategoryId: "",
		password: "",
		lat: 0,
		long: 0,
		address: "",
	});

	function handlerPlace(data: any, details: any) {
		setEstablishment({
			...establishment,
			address: data.description,
			long: details.geometry.location.lng,
			lat: details.geometry.location.lat,
		});
	}

	async function handleNext(isBack: boolean) {
		try {
			setLoading(true);
			let activeKeyIndex = -1;

			//Captura o index do objeto que esta sendo exibido na tela
			Object.values(activeFields).forEach((item, index) => {
				if (item.includes(true)) {
					activeKeyIndex = index;
				}
			});

			const propertiesInArray = Object.getOwnPropertyNames(activeFields);
			//Captura a propriedade do campo atual exibido na tela
			let property = propertiesInArray[
				activeKeyIndex
			] as keyof IEstablishmentRegister;
			//Captura a propriedade do próximo campo que será exibido na tela
			const newProperty = propertiesInArray[
				isBack ? --activeKeyIndex : ++activeKeyIndex
			] as keyof IEstablishmentRegister;

			if (!isBack) {
				const isValid = await RegisterService.ValidateProperty(
					establishment[property],
					property
				);

				if (
					property == "closedAt" &&
					!RegisterService.hourIsValid(
						establishment.openedAt,
						establishment.closedAt
					)
				) {
					Flash.customMessage(
						"Horário de fechamento menor que o de abertura",
						"Prencha o campo corretamente",
						"WARNING"
					);
					return;
				}

				if (!isEmpty(isValid)) {
					if (isValid.hasOwnProperty("mail")) {
						Flash.customMessage(
							isValid.mail as string,
							"Inválido",
							"WARNING"
						);
					} else if (isValid.hasOwnProperty("cnpj")) {
						Flash.customMessage(
							isValid.cnpj as string,
							"Inválido",
							"WARNING"
						);
					} else {
						Flash.customMessage(
							"Preencha o campo corretamente",
							"Tem algo errado com esse campo",
							"WARNING"
						);
					}

					Haptic.notificationAsync(
						Haptic.NotificationFeedbackType.Warning
					);
					return;
				}

				fadeInDown.transitionTo("from");

				if (property === nameof<IEstablishmentRegister>("password")) {
					navigation.navigate("Contract", establishment);
					return;
				}
			}

			const tmp = activeFields;

			//Alterar a visualização para os próximosque seram exibidos
			tmp[property][0] = false;
			tmp[newProperty][0] = true;

			setActiveMessage(tmp[newProperty][1]);
			setActiveFields({ ...tmp });
		} finally {
			setLoading(false);
		}

		fadeInDown.transitionTo("to");
	}

	return (
		<Wrapper>
			<Container>
				<AnimatedContainer state={fadeInDown}>
					<Question>{activeMessage}</Question>
				</AnimatedContainer>

				{activeFields.name[0] && (
					<Name
						value={establishment.name}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, name: e })
						}
					/>
				)}

				{activeFields.phone[0] && (
					<Phone
						value={establishment.phone}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, phone: e })
						}
					/>
				)}

				{activeFields.mail[0] && (
					<Mail
						value={establishment.mail}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, mail: e })
						}
					/>
				)}

				{activeFields.password[0] && (
					<Password
						value={establishment.password}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, password: e })
						}
					/>
				)}

				{activeFields.cnpj[0] && (
					<Cnpj
						value={`${establishment.cnpj}`}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, cnpj: e })
						}
					/>
				)}

				{activeFields.ownerName[0] && (
					<NameResponsible
						value={`${establishment.ownerName}`}
						setValue={(e: string) =>
							setEstablishment({ ...establishment, ownerName: e })
						}
					/>
				)}

				{activeFields.ownerCpf[0] && (
					<Cpf
						value={`${establishment.ownerCpf}`}
						onChangeText={(e: string) =>
							setEstablishment({ ...establishment, ownerCpf: e })
						}
					/>
				)}

				{activeFields.closedAt[0] && (
					<PickerTimeStartEnd
						startValue={establishment.openedAt}
						endvalue={establishment.closedAt}
						onChangeCbEnd={(e: Date) =>
							setEstablishment({ ...establishment, closedAt: e })
						}
						onChangeCbStart={(e: Date) =>
							setEstablishment({ ...establishment, openedAt: e })
						}
					/>
				)}

				{activeFields.businessCategoryId[0] && (
					<PickerModelBusiness
						onChangeCb={(e: string) =>
							setEstablishment({
								...establishment,
								businessCategoryId: e,
							})
						}
					/>
				)}

				{activeFields.lat[0] && (
					<GooglePlaces
						onPress={(data, details = null) =>
							handlerPlace(data, details)
						}
					/>
				)}

				<BottomContainer>
					{!activeFields.name[0] && (
						<CompleteButton
							back={!activeFields.name[0]}
							onPress={() => handleNext(true)}
						/>
					)}
					<CompleteButton onPress={() => handleNext(false)} />
				</BottomContainer>
			</Container>
			<Spinner loading={loading} />
		</Wrapper>
	);
};
