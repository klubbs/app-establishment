import { createInstanceAuthZn, IResponseMessage } from "../settings/services/api"
import { refreshTokensInStorage } from "../utils/async_storage"
import { RefreshTokenResponse } from "./@types/@auth-service"

export class AuthService {

	static async generateAppCredential() {
		const { data } = await createInstanceAuthZn
			.get<IResponseMessage<{ token: string }>>('auth/credentials/application')

		await refreshTokensInStorage(data.message.token)

		return data.message.token
	}

	static async refresh(currentToken: string, refresh: string): Promise<string> {
		const { data } = await createInstanceAuthZn
			.get<IResponseMessage<RefreshTokenResponse>>('auth/refresh', {
				params: {
					token: currentToken,
					refresh_token: refresh
				}
			})

		await refreshTokensInStorage(data.message.token, data.message.refresh_token)

		return data.message.token;
	}

}
