import React, { useState, useEffect } from "react";
import { Alert, Modal } from "react-native";
import colors from "../../../../assets/constants/colors";
import { InfoIcon } from "../../../../assets/icons/info_icon";
import { CouponCreateImage } from "../../../../assets/images/coupon-create-svg";
import { CouponService } from "../../../services/coupon_service";
import { ICoupon } from "../../../services/interfaces/icoupon";
import { isEmpty, nameof } from "../../../utils/extensions/object_extensions";
import { Flash } from "../../../utils/flash";
import Button from "../../component/button";
import { PickerNumber } from "../../component/picker_number";
import FlashComponent from 'flash-notify';
import { Spinner } from "../../component/spinner";
import {
	Wrapper,
	Container,
	Off,
	Rules,
	RulesSubtitle,
	SubContainer,
	ValidSubtitle,
	DatePicker,
	Cancel,
} from "./styles";
import { IError } from "../../../settings/services/api";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const CouponCreate: React.FC<{ visible: boolean; onCancellCb: any }> = (props) => {


	const [loading, setLoading] = useState(false)
	const [rules, setrules] = useState("");
	const [offValue, setOffValue] = useState(0);
	const [dateValidAt, setdateValidAt] = useState(new Date(Date.now()));


	const onChangeDate = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || dateValidAt;

		setdateValidAt(currentDate);
	};

	const onCreateCoupon = async () => {

		const onCreate = async () => {
			try {

				setLoading(true)

				const fields = {
					description: rules,
					offPercentual: offValue,
					validAt: dateValidAt,
				}

				const validFields = CouponService.validate(fields);

				if (!isEmpty(validFields)) {

					if (validFields.hasOwnProperty(nameof<ICoupon>("description")))
						Flash.customMessage("Descreva para o usuário as regras do cupom", "Regras do cupom")


					if (validFields.hasOwnProperty(nameof<ICoupon>("offPercentual")))
						Flash.customMessage("Dê um desconto maior que 0%", "Percentual do desconto")

					return;
				}

				await CouponService.createCoupon(fields)

				Flash.congratulationCreateCoupon()

				//Clean
				setrules("")

				setOffValue(0)

				setdateValidAt(new Date(Date.now()))

				props.onCancellCb({ success: true });

			} catch (error) {

				CouponService.catchCreateCoupon(error as IError);

			} finally {
				setLoading(false)
			}
		}

		Alert.alert(
			"Gostaria de criar este cupom?",
			'Você só pode criar um cupom a cada período de 24 horas',
			[
				{
					text: 'Sim',
					onPress: () => onCreate()
				},
				{
					text: 'Não',
					onPress: () => { },
					style: 'cancel'
				}
			]
		);

	};

	return (
		<Modal
			presentationStyle={'overFullScreen'}
			animationType={"slide"}
			transparent={true}
			visible={props.visible}
		>
			<Spinner loading={loading} />
			<FlashComponent />

			<Wrapper>

				<Cancel onPress={props.onCancellCb} />

				<Container>
					<CouponCreateImage width={"95%"} height={"50%"} />
					<Off>{offValue}%</Off>

					<ValidSubtitle>Válido até</ValidSubtitle>
					<DatePicker value={dateValidAt} onChange={onChangeDate} />

					<RulesSubtitle>Regras do cupom{" "}
						<InfoIcon width={10} height={10} fill={colors.COLOR_YELLOW_BUTTON_TEXT} />
					</RulesSubtitle>

					<Rules value={rules} onChangeText={(e) => setrules(e)} />
				</Container>

				<SubContainer>
					<PickerNumber
						value={offValue}
						setValue={(e: any) => setOffValue(e)}
					/>
				</SubContainer>

				<Button
					text={"CRIAR CUPOM"}
					styleContainer={{ width: "90%" }}
					onPress={() => onCreateCoupon()}
				/>
			</Wrapper>
		</Modal>
	);
};
