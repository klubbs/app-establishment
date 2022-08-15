import { connectionHandler, IResponseMessage } from '../settings/connection';
import * as ImagePicker from 'expo-image-picker';
import { ILoginResponse } from './@types/@login-service';

export class ProfileService {

	static async updateImageProfile(image: ImagePicker.ImagePickerResult): Promise<string> {
		if (image.cancelled) throw Error('File cannot be cancelled')

		let formData = new FormData()

		formData
			.append(
				'image',
				{
					uri: image.uri, type: 'image/jpg', name: image?.uri.split('/').pop()
				}
			)

		const { data } = await connectionHandler('KLUBBS_API_URL')
			.put<IResponseMessage<{ image: string }>>(`stores/profile/image`, formData)

		return data.message.image
	}


	static async uploadDocuments(
		cpf: ImagePicker.ImagePickerResult,
		cnpj: ImagePicker.ImagePickerResult): Promise<void> {

		if (cpf.cancelled || cnpj.cancelled) throw Error('File cannot be cancelled')


		let form = new FormData()

		form.append('AttachmentCpf', {
			uri: cpf?.uri, type: 'image/jpg', name: cpf.uri.split('/').pop()
		})

		form.append('AttachmentCnpj', {
			uri: cnpj.uri, type: 'image/jpg', name: cnpj.uri.split('/').pop()
		})

		await connectionHandler('KLUBBS_API_URL').post(`stores/profile/docs`, form)
	}

	static async getEstablishment(): Promise<ILoginResponse> {
		const { data } = await connectionHandler('KLUBBS_API_URL')
			.get<IResponseMessage<ILoginResponse>>('stores')

		return data.message
	}

}
