import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import colors from '../../../../assets/constants/colors';
import { WrapperPicker } from './styles';
import { RegisterService } from '../../../services/register_service';
import { ICategoryResponse } from '../../../services/@types/registerTypes';
import { Flash } from '../../../utils/flash';

export const PickerModelBusiness: React.FC<{ onChangeCb: any }> = (props) => {

	const [values, setValues] = useState<ICategoryResponse[]>([])
	const [selectedValue, setSelectedValue] = useState<string>('')

	useEffect(() => {

		(
			async function getCategories() {
				try {
					const response = await RegisterService.getCategories();

					setValues(response
						.filter(item => item.id !== '94d9ccaf-9a03-4b1d-9dc7-bec0931b1381'))

					props.onChangeCb('1ccb365c-774e-44d3-931f-47e6f463d18e')
					setSelectedValue('1ccb365c-774e-44d3-931f-47e6f463d18e')

				} catch (error) {
					Flash.spillCoffee()
				}
			}
		)()

	}, [])

	return (
		<WrapperPicker
			selectedValue={selectedValue}
			onValueChange={(itemValue: string, itemIndex) => {
				props.onChangeCb(itemValue)
				setSelectedValue(itemValue)
			}
			}>
			{values.map((key, index) => {
				return (<Picker.Item
					label={key.description}
					value={key.id}
					key={key.id}
					color={colors.COLOR_SECUNDARY_BLACK}
					style={{
						fontFamily: 'Nunito_Light',
						fontSize: 15
					}}
				/>)
			})}
		</WrapperPicker>
	);
}
