import React, { useState, useContext, useCallback } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { ProfileService } from '../../../services/profile-service';
import { Flash } from '../../../utils/flash';
import { Spinner } from '../../component/spinner';
import { AuthContext } from '../../../contexts/auth-context';
import { useNavigation } from '@react-navigation/native';
import {
	Wrapper,
	FileBoxSubtitle,
	FileContainer,
	FileSubtitle,
	FileBoxUpload,
	Container,
	SendButton,
	Icon,
	Subtitle,
	Title
} from './styles';
import { isAPIException } from '../../../utils/documents_utils';
import { Middlewares } from '../../../utils/middlewares';

export const DocumentsScreen: React.FC = () => {

	const [imageCnpj, setImageCnpj] = useState<ImagePicker.ImagePickerResult>({} as any)
	const [imageCpf, setImageCpf] = useState<ImagePicker.ImagePickerResult>({} as any)
	const [loading, setLoading] = useState(false)

	const navigation = useNavigation();
	const { reloadProfileInCloud } = useContext(AuthContext)

	const cpfFill = useCallback(() => imageCpf?.cancelled === false, [imageCpf])
	const cnpjFill = useCallback(() => imageCnpj?.cancelled === false, [imageCnpj])


	async function handleImage(isCnpj: boolean) {
		const { status } = await MediaLibrary.requestPermissionsAsync()

		if (status !== 'granted') {
			return;
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 0.5
		});

		if (result.cancelled) {
			return
		}

		isCnpj
			? setImageCnpj(result)
			: setImageCpf(result)
	}

	async function handleUpload() {

		try {
			setLoading(true)
			await ProfileService.uploadDocuments(imageCpf, imageCnpj)

			await reloadProfileInCloud()

			navigation.goBack()
		} catch (error) {
			Middlewares.middlewareError(() => Flash.spillCoffee(), error)
		} finally { setLoading(false) }

	}



	return (
		<Wrapper>
			<Spinner loading={loading} />
			<Title>Análise de documentos</Title>
			<Container>
				<FileContainer>
					<FileBoxSubtitle>
						<FileSubtitle>Documento com CNPJ</FileSubtitle>
					</FileBoxSubtitle>
					<FileBoxUpload active={cnpjFill()} onPress={() => handleImage(true)}>
						<Icon active={cnpjFill()} />
					</FileBoxUpload>
				</FileContainer>

				<FileContainer>
					<FileBoxSubtitle>
						<FileSubtitle>Documento com CPF</FileSubtitle>
					</FileBoxSubtitle>
					<FileBoxUpload active={cpfFill()} onPress={() => handleImage(false)}>
						<Icon active={cpfFill()} />
					</FileBoxUpload>
				</FileContainer>
			</Container>
			<SendButton disabled={!(cpfFill() && cnpjFill())} onPress={handleUpload} />
			<Subtitle>Você será informado por email assim que analisarmos!</Subtitle>
		</Wrapper>
	);
}
