import React from 'react';
import { TimePicker, Wrapper, SubtitleContainer, Subtitle } from './styles';

// import { Container } from './styles';

export const PickerTimeStartEnd: React.FC<{ startValue: Date, endvalue: Date, onChangeCbStart: any, onChangeCbEnd: any }> = (props) => {

	const onChangeStart = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || props.startValue;
		props.onChangeCbStart(currentDate);
	};

	const onChangeEnd = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || props.startValue;
		props.onChangeCbEnd(currentDate)
	};

	return (
		<Wrapper>
			<SubtitleContainer>
				<TimePicker value={props.startValue ?? new Date(Date.now())} onChange={onChangeStart} />
				<Subtitle>Abertura</Subtitle>
			</SubtitleContainer>

			<SubtitleContainer>
				<TimePicker value={props.endvalue ?? new Date(Date.now())} onChange={onChangeEnd} minimumDate={props.startValue} />
				<Subtitle>Fechamento</Subtitle>
			</SubtitleContainer>
		</Wrapper >

	)

}
