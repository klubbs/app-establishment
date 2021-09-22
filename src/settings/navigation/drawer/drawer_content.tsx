import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import colors from '../../../../assets/constants/colors';
import styled from 'styled-components'
import { CacheManager } from "react-native-expo-image-cache";

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../contexts/auth_context';
import { ProfileImage } from '../../../components/component/profileImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileService } from '../../../services/profileService';
import { mergeEstablishmentInStorage } from '../../../utils/async_storage';
import { ILoginResponse } from '../../../services/interfaces/ilogin';
import { Spinner } from '../../../components/component/spinner';

export const DrawerContent: React.FC = () => {

	const { logout, reloadProfile, establishment } = useContext(AuthContext)
	const navigation = useNavigation();

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
		const { status } = await MediaLibrary.requestPermissionsAsync()

		if (status !== 'granted') {
			//   setVisibleModalPermission(true)
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

		await mergeEstablishmentInStorage({ ...establishment as ILoginResponse, image: newImage })

		await CacheManager.clearCache()

		await reloadProfile()

		setLoading(false)
	}

	return (
		<DrawerContentScrollView >
			<Spinner loading={loading} />

			<TouchableOpacity onPress={onUpdateImageProfile} style={{ marginLeft: '5%' }}>
				<ProfileImage />
			</TouchableOpacity>

			<MenuItem
				label="Painel"
				onPress={() => navigation.navigate({ name: 'Home' })}
			/>

			<MenuItem
				label="Configurações"
				onPress={() => navigation.navigate({ name: 'Configurations' })}
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


