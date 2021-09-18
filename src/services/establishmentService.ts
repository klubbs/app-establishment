import { IResponseMessage } from './../settings/services/api';
import * as ImagePicker from 'expo-image-picker';
import api from '../settings/services/api';

export class EstablishmentService {

	static async updateImageProfile(image: ImagePicker.ImagePickerResult): Promise<string> {
		let formData = new FormData()

		formData
			.append('image', { uri: image.uri, type: 'image/jpg', name: image.uri.split('/').pop() })

		const { data } = await api
			.put<IResponseMessage<{ image: string }>>(`stores/profile/image`, formData)

		return data.message.image
	}


}
