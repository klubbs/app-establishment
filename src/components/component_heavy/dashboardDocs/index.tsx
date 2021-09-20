import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, ValueSubtitle, DocsButton } from './styles';

export const DashboardDocs: React.FC = () => {

	const navigation = useNavigation();

	return (
		< Wrapper >
			<ValueSubtitle>Sua documentação esta pendente</ValueSubtitle>
			<DocsButton onPress={() => navigation.navigate('Documents')} />
		</Wrapper >
	);
}
