import { AxiosInstance } from "axios"
import { connectionHandler, IResponseMessage } from "../settings/services/api"
import { getRefreshTokenInStorage, getTokenInStorage } from "../utils/async_storage"
import { RefreshTokenResponse } from "./@types/@auth-service"

export class AuthService {

    static async generateAppCredential() {
        const { data } = await connectionHandler('KLUBBS_AUTHZN_URL')
            .get<IResponseMessage<{ token: string }>>('auth-zn/auth/credentials/application')

        return data.message.token
    }

    static async refresh(currentToken: string, refresh: string): Promise<string> {

        const { data } = await connectionHandler('KLUBBS_AUTHZN_URL')
            .get<IResponseMessage<RefreshTokenResponse>>('auth-zn/auth/refresh', {
                params: {
                    token: currentToken,
                    refresh_token: refresh
                }
            })

        return data.message.token
    }

}