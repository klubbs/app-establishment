import React, { useContext, useState } from 'react';
import { RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Wrapper, ValueSubtitle, DocsButton, RefreshSubtitle } from './styles';
import { AuthContext } from '../../../contexts/auth_context';
import { Flash } from '../../../utils/flash';
import colors from '../../../../assets/constants/colors';

export const DashboardDocs: React.FC = () => {

	const [refreshing, setRefreshing] = useState(false);

	const navigation = useNavigation();
	const { establishment, reloadProfileInCloud } = useContext(AuthContext)

	async function handleRefresh() {
		try {
			setRefreshing(true)

			await reloadProfileInCloud()

		} finally { setRefreshing(false) }
	}

	return (
		<Wrapper
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={handleRefresh}
					tintColor={colors.COLOR_WHITE}
					colors={[colors.COLOR_WHITE]}
				/>
			}
		>
			<ValueSubtitle>{
				establishment?.documentation_status === "PENDING"
					? "Sua documentação esta pendente"
					: "Documentação em análise"
			}
			</ValueSubtitle>

			{
				establishment?.documentation_status === "PROCESSING"
				&& <RefreshSubtitle>Arraste para atualizar</RefreshSubtitle>}

			{
				establishment?.documentation_status === "PENDING"
				&& <DocsButton onPress={() => navigation.navigate('Documents')} />
			}
		</Wrapper >
	);
}
