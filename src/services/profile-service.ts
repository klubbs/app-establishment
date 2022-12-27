import { connectionHandler, IResponseMessage } from "../settings/connection";
import * as ImagePicker from "expo-image-picker";
import { ILoginResponse, TStoreResponse } from "./@types/@login-service";

export class ProfileService {
	static async updateImageProfile(
		image: ImagePicker.ImagePickerResult
	): Promise<string> {
		if (image.canceled) throw Error("File cannot be cancelled");

		let formData = new FormData();

		formData.append("image", {
			uri: image?.assets[0].uri,
			type: "image/jpg",
			name: image?.assets[0].fileName?.split("/").pop(),
		});

		const { data } = await connectionHandler("KLUBBS_API_URL").put<
			IResponseMessage<{ image: string }>
		>(`stores/profile/image`, formData);

		return data.message.image;
	}

	static async uploadDocuments(
		cpf: ImagePicker.ImagePickerResult,
		cnpj: ImagePicker.ImagePickerResult
	): Promise<void> {
		if (cpf.canceled || cnpj.canceled)
			throw Error("File cannot be cancelled");

		let form = new FormData();

		form.append("AttachmentCpf", {
			uri: cpf?.assets[0].uri,
			type: "image/jpg",
			name: cpf.assets[0].fileName?.split("/").pop(),
		});

		form.append("AttachmentCnpj", {
			uri: cnpj.assets,
			type: "image/jpg",
			name: cnpj.assets[0].fileName?.split("/").pop(),
		});

		await connectionHandler("KLUBBS_API_URL").post(
			`stores/profile/docs`,
			form
		);
	}

	static async getStore(): Promise<TStoreResponse> {
		const { data } = await connectionHandler("KLUBBS_API_URL").get<
			IResponseMessage<TStoreResponse>
		>("stores");

		return data.message;
	}
}
