import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import colors from '../../../../assets/constants/colors';
import { WrapperPicker } from './styles';
import { IModelBusinessPicker } from './interfaces';

export const PickerModelBusiness: React.FC<{ onChangeCb: any }> = (props) => {

    const [values, setValues] = useState<IModelBusinessPicker[]>([])
    const [selectedValue, setSelectedValue] = useState<string>('0e1dde0b-32f3-4417-8309-4b7a42a80d9a')

    useEffect(() => {
        props.onChangeCb('0e1dde0b-32f3-4417-8309-4b7a42a80d9a')
        setValues([{ id: '0e1dde0b-32f3-4417-8309-4b7a42a80d9a', description: 'Alimentício' }, { id: '0e1dde0b-32f3-4417-8309-4b7a42a80d9a', description: 'Games' }, { id: '0e1dde0b-32f3-4417-8309-4b7a42a80d9a', description: 'Roupas' }])

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
