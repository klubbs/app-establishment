import { IResponseMessage } from '../settings/services/api';
import * as ImagePicker from 'expo-image-picker';
import api from '../settings/services/api';
import { ILoginResponse } from './@types/loginTypes';

export class ProfileService {

	static async updateImageProfile(image: ImagePicker.ImagePickerResult): Promise<string> {
		if (image.cancelled) throw Error('File cannot be cancelled')

		let formData = new FormData()

		formData
			.append('image', { uri: image.uri, type: 'image/jpg', name: image?.uri.split('/').pop() })

		const { data } = await api
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

		await api.post(`stores/profile/docs`, form)
	}

	static async getEstablishment(): Promise<ILoginResponse> {
		const { data } = await api.get<IResponseMessage<ILoginResponse>>('stores')

		return data.message
	}

}
