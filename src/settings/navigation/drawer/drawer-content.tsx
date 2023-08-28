import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useState } from 'react';
import { Alert, Linking } from 'react-native';
import colors from '../../../../assets/constants/colors';
import styled from 'styled-components'
import { CacheManager } from "react-native-expo-image-cache";
import { StackNavigationProp } from '@react-navigation/stack';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../contexts/auth-context';
import { ProfileImage } from '../../../components/component/profileImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileService } from '../../../services/profile-service';
import { mergeStoreInStorage } from '../../../utils/async_storage';
import { ILoginResponse } from '../../../services/@types/@login-service';
import { Spinner } from '../../../components/component/spinner';
import { IAppStackParams } from '../../@types/iapp-stack-params';

export const DrawerContent: React.FC = () => {

	const { logout, reloadProfile, establishment } = useContext(AuthContext)
	const navigation = useNavigation<StackNavigationProp<IAppStackParams>>();

	const [loading, setLoading] = useState(false)

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

	async function onUpdateImageProfile() {

		try {

			const { status } = await MediaLibrary.requestPermissionsAsync()

			if (status !== 'granted') {
				Alert.alert(
					"Conceda acesso a galeria",
					"Para que você possa acessar a galeria precisamos da sua permissão",
					[
						{
							text: "Não",
							onPress: () => navigation.goBack(),
							style: "cancel"
						},
						{ text: "OK", onPress: () => Linking.openSettings() }
					]
				)
				return;
			}

			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1
			});

			if (result.cancelled) {
				return
			}
			setLoading(true)

			const newImage = await ProfileService.updateImageProfile(result)

			await mergeStoreInStorage({ ...establishment as ILoginResponse, image: newImage })

			await CacheManager.clearCache()

			await reloadProfile()

		} finally { setLoading(false) }
	}

	return (
		<DrawerContentScrollView >
			<Spinner loading={loading} />

			<TouchableOpacity onPress={onUpdateImageProfile} style={{ marginLeft: '5%' }}>
				<ProfileImage />
			</TouchableOpacity>

			<MenuItem
				label="Painel"
				onPress={() => navigation.navigate('Home')}
			/>

			<MenuItem
				label="Minhas Ofertas"
				onPress={() => navigation.navigate('MyOffers')}
			/>

			<MenuItem
				label="Pagamentos"
				onPress={() => navigation.navigate('Payments')}
			/>

			<MenuItem
				label="Configurações"
				onPress={() => navigation.navigate('Configurations')}
			/>

			<MenuItem
				label="Ajuda"
				onPress={() => navigation.navigate('Help')}
			/>

			<CloseItem
				label="Sair"
				onPress={() => onLogout()}
			/>
		</DrawerContentScrollView>
	);
};


const MenuItem = styled(DrawerItem).attrs((props) => ({
	labelStyle: { color: colors.COLOR_WHITE, fontFamily: 'Nunito_Bold', fontSize: 18, marginTop: 20 }
}))``;

const CloseItem = styled(DrawerItem).attrs((props) => ({
	labelStyle: { color: colors.COLOR_RED, fontFamily: 'Nunito_Bold', fontSize: 12, marginTop: 40 }
}))``;


