import React, { useEffect, useState } from "react";
import { Alert, Modal, Platform } from "react-native";
import { CouponCreateImage } from "../../../../assets/images/coupon-create-svg";
import { OfferService } from "../../../services/offer-service";
import { IOffer } from "../../../services/@types/@offer-service";
import { isEmpty, nameof } from "../../../utils/extensions/object_extensions";
import { Flash } from "../../../utils/flash";
import Button from "../../component/button";
import { PickerNumber } from "../../component/picker_number";
import FlashComponent from "flash-notify";
import { Spinner } from "../../component/spinner";
import {
	Wrapper,
	Container,
	Off,
	SubtitleMinimumTicket,
	SubContainer,
	ValidSubtitle,
	DatePicker,
	Cancel,
	CancelClick,
	WrapperMinimumTicket,
	MinimumTicket,
	WrapperCoupon,
	WrapperWeeks,
	SubtitleWeeks,
	AndroidTime,
	TouchablePickerAndroid,
	DashedBorder,
	DashedText,
} from "./styles";
import { IError } from "../../../settings/connection";
import { Middlewares } from "../../../utils/middlewares";
import { DaysOfWeek } from "../../component/DaysOfWeek";
import { Feather } from "@expo/vector-icons";
import colors from "../../../../assets/constants/colors";

export const OfferCreate: React.FC<{ visible: boolean; onCancellCb: any }> = (
	props
) => {
	const [loading, setLoading] = useState(false);
	const [visibleComponent, setVisibleComponent] = useState(false);
	const [showAndroidPicker, setShowAndroidPicker] = useState(false);

	const [offValue, setOffValue] = useState(5);
	const [dateValidAt, setdateValidAt] = useState(new Date());
	const [daysOfWeek, setDaysOfWeek] = useState<number[]>([]);
	const [minimumTicket, setMinimumTicket] = useState("");

	const ticketIsEditable = offValue > 5;

	useEffect(() => {
		if (offValue === 5) {
			setMinimumTicket("");
		}
	}, [offValue]);

	function onChangeDate(event: any, selectedDate: any) {
		const currentDate: Date = selectedDate || dateValidAt;

		setShowAndroidPicker(Platform.OS === "ios");
		setdateValidAt(currentDate);
	}

	async function onCreateCoupon() {
		setVisibleComponent(true);

		async function onCreate() {
			try {
				setLoading(true);

				const fields: IOffer = {
					description: "",
					offPercentual: offValue,
					validAt: dateValidAt,
					workingDays: daysOfWeek,
					minimumTicket: minimumTicket,
				};

				const validFields = OfferService.validate(fields);

				if (!isEmpty(validFields)) {
					if (validFields.hasOwnProperty(nameof<IOffer>("workingDays")))
						Flash.customMessage(
							"Defina os dias da semana válidos para esta oferta",
							""
						);

					return;
				}

				await OfferService.createOffer(fields);

				Flash.congratulationCreateOffer();

				clearClose();
			} catch (error) {
				Middlewares.middlewareError(
					() => OfferService.catchCreateOffer(error as IError),
					error
				);
			} finally {
				setLoading(false);
			}
		}

		Alert.alert(
			"Criar oferta",
			`Porcentagem de desconto : ${offValue}%
			${"\n"}Válido até: ${dateValidAt.toLocaleDateString("pt-br", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})}
			${"\n"}Valor mínimo: R$${minimumTicket.length === 0 ? "0,00" : minimumTicket}
			`,
			[
				{
					text: "Sim",
					onPress: () => onCreate(),
				},
				{
					text: "Não",
					onPress: () => {},
					style: "cancel",
				},
			]
		);
	}

	function clearClose() {
		setOffValue(5);

		setdateValidAt(new Date());

		setDaysOfWeek([]);

		setMinimumTicket("");

		setVisibleComponent(false);

		props.onCancellCb();
	}

	function handleDaysWeek(day: number) {
		const already = daysOfWeek.includes(day);

		if (already) {
			const newState = daysOfWeek.filter((item) => item !== day);
			setDaysOfWeek(newState);
		} else {
			setDaysOfWeek([...daysOfWeek, day]);
		}
	}

	return (
		<Modal
			presentationStyle={"overFullScreen"}
			animationType={"slide"}
			transparent={true}
			visible={props.visible}
		>
			<Spinner loading={loading} />
			{visibleComponent && <FlashComponent />}

			<Wrapper>
				<CancelClick onPress={() => clearClose()}>
					<Cancel />
				</CancelClick>

				<SubContainer>
					<PickerNumber
						value={offValue}
						setValue={(e: any) => setOffValue(e)}
					/>
				</SubContainer>

				<Container>
					<WrapperCoupon>
						<CouponCreateImage width={"90%"} height={"85%"} />
						<Off>{offValue}%</Off>
						<ValidSubtitle>Válido até</ValidSubtitle>
						{Platform.OS === "ios" && (
							<DatePicker
								display={"spinner"}
								minimumDate={new Date()}
								value={dateValidAt}
								onChange={onChangeDate}
							/>
						)}
						{Platform.OS === "android" && (
							<TouchablePickerAndroid
								onPress={() => setShowAndroidPicker(true)}
							>
								<AndroidTime>
									{dateValidAt.toCustomLocaleDateString()}
									{"  "}
									<Feather name={"chevron-down"} size={15} />
								</AndroidTime>
							</TouchablePickerAndroid>
						)}
						{Platform.OS === "android" && showAndroidPicker && (
							<DatePicker
								style={{
									backgroundColor: colors.COLOR_YELLOW,
								}}
								display={"default"}
								minimumDate={new Date()}
								value={dateValidAt}
								onChange={onChangeDate}
							/>
						)}
					</WrapperCoupon>

					{!ticketIsEditable && (
						<DashedBorder>
							<DashedText>
								OFERTAS COM O MENOR DESCONTO,{"\n"} NÃO PODEM TER VALOR
								MÍNIMO
							</DashedText>
						</DashedBorder>
					)}

					{ticketIsEditable && (
						<WrapperMinimumTicket>
							<SubtitleMinimumTicket>Valor mínimo</SubtitleMinimumTicket>
							<MinimumTicket
								editable={ticketIsEditable}
								value={minimumTicket}
								onChangeText={(e: string) => setMinimumTicket(e)}
							/>
						</WrapperMinimumTicket>
					)}

					<WrapperWeeks>
						<SubtitleWeeks>Dias da semana: </SubtitleWeeks>
						<DaysOfWeek cb={handleDaysWeek} />
					</WrapperWeeks>
				</Container>

				<Button
					text={"CRIAR OFERTA"}
					styleContainer={{ width: "90%" }}
					onPress={() => onCreateCoupon()}
				/>
			</Wrapper>
		</Modal>
	);
};
