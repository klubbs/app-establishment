import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimePicker, Wrapper, SubtitleContainer, Subtitle } from './styles';

// import { Container } from './styles';

export const PickerTimeStartEnd: React.FC<{ startValue: any, endvalue: any }> = (props) => {
    return (
        <Wrapper>
            <SubtitleContainer>
                <TimePicker value={props.startValue ?? new Date(Date.now())} onChange={() => console.log('')} />
                <Subtitle>Abertura</Subtitle>
            </SubtitleContainer>

            <SubtitleContainer>
                <TimePicker value={props.startValue ?? new Date(Date.now())} onChange={() => console.log('')} />
                <Subtitle>Fechamento</Subtitle>
            </SubtitleContainer>
        </Wrapper >

    )

}
