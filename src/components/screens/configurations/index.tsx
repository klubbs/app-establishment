import React, { useState } from 'react';
import { Linking, StatusBar } from 'react-native';
import { MenuItem } from '../../component/menuItem';

import { Wrapper, ContainerScroll } from './styles';

export const ConfigurationsScreen: React.FC = () => {

	const [configs, setConfig] = useState([])


	return (
		<Wrapper>
			<StatusBar barStyle={'dark-content'} animated={true} />
			<ContainerScroll>

				<MenuItem
					key={'0'}
					text='Permissões'
					description='Conceda permissões ao app'
					icon='toggle-right'
					cb={() => Linking.openSettings()}
				/>

			</ContainerScroll>
		</Wrapper>
	);
}
