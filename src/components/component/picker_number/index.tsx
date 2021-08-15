import React from 'react';
import { Picker } from '@react-native-picker/picker';
import colors from '../../../../assets/constants/colors';


export const PickerNumber: React.FC<{ value: any, setValue: any }> = (props) => {

    return (
        <Picker
            style={{ width: 100, height: 200 }}
            selectedValue={props.value}
            onValueChange={(itemValue, itemIndex) =>
                props.setValue(itemValue)
            }>
            {Array.from(Array(101).keys()).map((key, index) => {
                return (<Picker.Item label={`${index}`} color={colors.COLOR_SECUNDARY_BLACK} value={index} key={index} />)
            })}
        </Picker>
    );
}
