import React, { useState } from 'react';
import { Selector } from '../selector';

import { Wrapper, Container, Text, WrapperSelector } from './styles';

export const DaysOfWeek: React.FC<{ cb: (day: number) => void }> = ({ cb }) => {

	const [days, setDays] = useState({
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false
	})

	return (
		<Wrapper>
			<WrapperSelector>
				<Container active={days[1]}>
					<Text>SEG</Text>
				</Container>
				<Selector onPress={() => {
					cb(1)
					setDays({ ...days, 1: !days[1] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[2]}>
					<Text>TER</Text>
				</Container>
				<Selector onPress={() => {
					cb(2)
					setDays({ ...days, 2: !days[2] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[3]}>
					<Text>QUA</Text>
				</Container>
				<Selector onPress={() => {
					cb(3)
					setDays({ ...days, 3: !days[3] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[4]}>
					<Text>QUI</Text>
				</Container>
				<Selector onPress={() => {
					cb(4)
					setDays({ ...days, 4: !days[4] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[5]}>
					<Text>SEX</Text>
				</Container>
				<Selector onPress={() => {
					cb(5)
					setDays({ ...days, 5: !days[5] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[6]}>
					<Text>SAB</Text>
				</Container>
				<Selector onPress={() => {
					cb(6)
					setDays({ ...days, 6: !days[6] })
				}} />
			</WrapperSelector>

			<WrapperSelector>
				<Container active={days[0]}>
					<Text>DOM</Text>
				</Container>
				<Selector onPress={() => {
					cb(0)
					setDays({ ...days, 0: !days[0] })
				}} />
			</WrapperSelector>

		</Wrapper>
	);
}
