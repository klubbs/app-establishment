import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import colors from '../../../../assets/constants/colors';
import styled from 'styled-components'
import { AuthContext } from '../../../contexts/auth_context';

export const DrawerContent: React.FC = () => {

	const { logout } = useContext(AuthContext)

	const navigation = useNavigation();

	const onLogout = async () => {
		Alert.alert(
			"Iremos sentir sua falta",
			'Gostaria de sair ?',
			[
				{
					text: 'Sim',
					onPress: () => logout()
				},
				{
					text: 'Não',
					onPress: () => { },
					style: 'cancel'
				}
			]
		);
	}

	return (
		<DrawerContentScrollView >
			<MenuItem
				label="Painel"
				onPress={() => navigation.navigate({ name: 'Home' })}
			/>
			<MenuItem
				label="Configurações"
				onPress={() => console.log('')}
			/>
			<CloseItem
				label="Sair"
				onPress={() => onLogout()}
			/>
		</DrawerContentScrollView>
	);
};


const MenuItem = styled(DrawerItem).attrs((props) => ({
	labelStyle: { color: colors.COLOR_WHITE, fontFamily: 'Nunito_Bold', fontSize: 20 }
}))``;

const CloseItem = styled(DrawerItem).attrs((props) => ({
	labelStyle: { color: colors.COLOR_RED, fontFamily: 'Nunito_Bold', fontSize: 12, marginTop: 40 }
}))``;


