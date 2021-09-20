import React from 'react';
import { View } from 'react-native';

import { Wrapper, FileBoxSubtitle, FileContainer, Subtitle, FileBoxUpload, Container, SendButton } from './styles';

export const DocumentsScreen: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<FileContainer>
					<FileBoxSubtitle>
						<Subtitle>Comprovação do CNPJ</Subtitle>
					</FileBoxSubtitle>
					<FileBoxUpload></FileBoxUpload>
				</FileContainer>

				<FileContainer>
					<FileBoxSubtitle>
						<Subtitle>Comprovação do CPF</Subtitle>
					</FileBoxSubtitle>
					<FileBoxUpload></FileBoxUpload>
				</FileContainer>
			</Container>
			<SendButton />
		</Wrapper>
	);
}
