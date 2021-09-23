import React, { useState } from 'react';

import { Wrapper, ContainerScroll } from './styles';

export const ConfigurationsScreen: React.FC = () => {

	const [configs, setConfig] = useState([])


	return (
		<Wrapper>
			<ContainerScroll>

			</ContainerScroll>
		</Wrapper>
	);
}
