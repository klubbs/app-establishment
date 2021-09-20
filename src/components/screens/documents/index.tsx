import React, { useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
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

export const DocumentsScreen: React.FC = () => {

	const [imageCnpj, setImageCnpj] = useState<{ uri: string, type: string, name: string }>
		({} as any)
	const [imageCpf, setImageCpf] = useState<{ uri: string, type: string, name: string }>
		({} as any)


	async function handleImage(isCnpj: boolean) {
		const { status } = await MediaLibrary.requestPermissionsAsync()

		if (status !== 'granted') {
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

		isCnpj
			? setImageCnpj({
				uri: result.uri,
				type: 'image/jpg',
				name: result.uri.split('/').pop() as string
			})
			: setImageCpf({
				uri: result.uri,
				type: 'image/jpg',
				name: result.uri.split('/').pop() as string
			})
	}

	async function handleUpload() {

	}


	return (
		<Wrapper>
			<Title>Análise de documentos</Title>
			<Container>
				<FileContainer>
					<FileBoxSubtitle>
						<FileSubtitle>Documento com CNPJ</FileSubtitle>
					</FileBoxSubtitle>
					<FileBoxUpload active={!!imageCnpj?.uri} onPress={() => handleImage(true)}>
						<Icon active={!!imageCnpj?.uri} />
					</FileBoxUpload>
				</FileContainer>

				<FileContainer>
					<FileBoxSubtitle>
						<FileSubtitle>Documento com CPF</FileSubtitle>
					</FileBoxSubtitle>
					<FileBoxUpload active={!!imageCpf?.uri} onPress={() => handleImage(false)}>
						<Icon active={!!imageCpf?.uri} />
					</FileBoxUpload>
				</FileContainer>
			</Container>
			<SendButton disabled={!(!!imageCpf.uri && !!imageCnpj.uri)} onPress={handleUpload} />
			<Subtitle>Você será informado por email assim que analisarmos!</Subtitle>
		</Wrapper>
	);
}
