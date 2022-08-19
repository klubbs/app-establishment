import React, { useCallback, useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native'
import { TimePicker, Wrapper, SubtitleContainer, Subtitle } from './styles';

export const PickerTimeStartEnd: React.FC<{ startValue: Date, endvalue: Date, onChangeCbStart: any, onChangeCbEnd: any }> = (props) => {

	const [enabledStart, setEnabledStart] = useState(false)
	const [enableEnd, setEnableEnd] = useState(false)

	function onChangeStart(event: any, selectedDate: any) {
		const currentDate = selectedDate || props.startValue;
		props.onChangeCbStart(currentDate);

		if (Platform.OS === 'android') {
			setEnabledStart(false)
		}
	};

	function onChangeEnd(event: any, selectedDate: any) {
		const currentDate = selectedDate || props.startValue;
		props.onChangeCbEnd(currentDate)

		if (Platform.OS === 'android') {
			setEnableEnd(false)
		}
	};

	const RenderStartPicker = useCallback(() => {
		if (Platform.OS == 'ios') {
			return (
				<React.Fragment>
					<TimePicker
						value={props.startValue ?? new Date(Date.now())}
						onChange={onChangeStart} />
					<Subtitle>Abertura</Subtitle>
				</React.Fragment>
			)
		}

		const RenderStartSubtitle = () => {
			return (
				<TouchableOpacity onPress={() => setEnabledStart(!enabledStart)}>
					<Subtitle>Abertura</Subtitle>
				</TouchableOpacity>
			)
		}

		if (Platform.OS == 'android' && enabledStart) {
			return (
				<React.Fragment>
					<TimePicker
						value={props.startValue ?? new Date(Date.now())}
						onChange={onChangeStart}
					/>
					<RenderStartSubtitle />
				</React.Fragment>
			)
		}

		return <RenderStartSubtitle />
	}, [enabledStart])

	const RenderEndPicker = useCallback(() => {
		if (Platform.OS == 'ios') {
			return (
				<React.Fragment>
					<TimePicker
						value={props.endvalue ?? new Date(Date.now())}
						onChange={onChangeEnd}
					/>
					<Subtitle>Fechamento</Subtitle>
				</React.Fragment>
			)
		}

		const RenderEndSubtitle = () => {
			return (
				<TouchableOpacity onPress={() => setEnableEnd(!enabledStart)}>
					<Subtitle>Fechamento</Subtitle>
				</TouchableOpacity>
			)
		}


		if (Platform.OS == 'android' && enableEnd) {
			return (
				<React.Fragment>
					<TimePicker
						value={props.endvalue ?? new Date(Date.now())}
						onChange={onChangeEnd}
					/>
					<RenderEndSubtitle />
				</React.Fragment>
			)
		}

		return <RenderEndSubtitle />

	}, [enableEnd])

	return (
		<Wrapper>
			<SubtitleContainer>
				<RenderStartPicker />
			</SubtitleContainer>

			<SubtitleContainer>
				<RenderEndPicker />
			</SubtitleContainer>
		</Wrapper >

	)

}
