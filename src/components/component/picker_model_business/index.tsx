import React, { useEffect, useState } from 'react';

import { WrapperPicker, CategoryDescription, TouchableCategory, WrapperPickerItem } from './styles';
import { RegisterService } from '../../../services/register-service';
import { ICategoryResponse } from '../../../services/@types/@register-service';
import { Flash } from '../../../utils/flash';
import { Middlewares } from '../../../utils/middlewares';

const TODOS_ID = '94d9ccaf-9a03-4b1d-9dc7-bec0931b1381'
const PIZZARIA_ID = '1ccb365c-774e-44d3-931f-47e6f463d18e'

export const PickerModelBusiness: React.FC<{ onChangeCb: any }> = (props) => {

	const [categories, setCategories] = useState<ICategoryResponse[]>([])
	const [selectedValue, setSelectedValue] = useState<ICategoryResponse | null>(null)

	useEffect(() => {

		(
			async function getCategories() {
				try {
					const response = await RegisterService.getCategories();

					setCategories(response.filter(item => item.id !== TODOS_ID))

					const pizza = response.find(i => i.id == PIZZARIA_ID) as ICategoryResponse

					props.onChangeCb(pizza.id)
					setSelectedValue(pizza)

				} catch (error) {
					Middlewares.middlewareError(() => Flash.spillCoffee(), error)
				}
			}
		)()

	}, [])

	function handleChange(id: string) {
		const toChange = categories.find(i => i.id == id);

		if (toChange) {
			props.onChangeCb(toChange.id);
			setSelectedValue(toChange);
		}
	}


	return (
		<WrapperPicker
			selectedValue={selectedValue?.id}
			onValueChange={handleChange}
		>
			{
				categories.map((key, index) => {
					return (<WrapperPickerItem
						label={key.description}
						value={key.id}
						key={key.id}
					/>
					)
				})
			}
		</WrapperPicker >
	)
}
