import React, { useState } from "react";
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
	CancelClick,
	ValidSwipe
} from "./styles";
import { IError } from "../../../settings/services/api";

export const CouponCreate: React.FC<{ visible: boolean; onCancellCb: any }> = (props) => {


	const [loading, setLoading] = useState(false)
	const [visibleComponent, setVisibleComponent] = useState(false)

	const [rules, setrules] = useState('');
	const [offValue, setOffValue] = useState(5);
	const [dateValidAt, setdateValidAt] = useState(new Date(Date.now()));


	const onChangeDate = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || dateValidAt;

		setdateValidAt(currentDate);
	};

	const onCreateCoupon = async () => {
		setVisibleComponent(true)

		const onCreate = async () => {
			try {

				setLoading(true)

				const fields = {
					description: rules,
					offPercentual: offValue,
					validAt: dateValidAt,
				}

				console.log(fields)

				const validFields = CouponService.validate(fields);

				if (!isEmpty(validFields)) {

					if (validFields.hasOwnProperty(nameof<ICoupon>("description")))
						Flash.customMessage(
							"Defina para os usuário as regras do cupom",
							"Regras do cupom"
						)


					return;
				}

				await CouponService.createCoupon(fields)

				Flash.congratulationCreateCoupon()

				clearClose()

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

	const clearClose = () => {
		setrules("")

		setOffValue(5)

		setdateValidAt(new Date(Date.now()))

		setVisibleComponent(false)

		props.onCancellCb();
	}

	return (
		<Modal
			presentationStyle={'overFullScreen'}
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
				<Container>
					<CouponCreateImage width={"95%"} height={"50%"} />
					<Off>{offValue}%</Off>

					<ValidSubtitle>Válido até  <ValidSwipe>* arraste para alterar *</ValidSwipe> </ValidSubtitle>
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
