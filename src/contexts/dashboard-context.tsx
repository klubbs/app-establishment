import React, { createContext, useContext, useEffect, useState } from "react"
import { ITransactionItems } from "../components/component-heavy/transactions/interfaces";
import { GetDashboardResponse } from "../services/@types/@finance-service";
import { FinanceService } from "../services/finance-service";
import { Flash } from "../utils/flash";
import { Middlewares } from "../utils/middlewares";
import { AuthContext } from "./auth-context";

export const DashboardContext = createContext(
    {} as {
        getDashboard: () => Promise<void>,
        walletStore: GetDashboardResponse,
        checkouts: ITransactionItems[] | null,
        refreshing: boolean
    }
)

const DashboardProvider: React.FC = ({ children }: any) => {
    const { reloadProfileInCloud } = useContext(AuthContext)

    const [walletStore, setWalletStore] = useState<GetDashboardResponse>({} as GetDashboardResponse)
    const [checkouts, setCheckouts] = useState<ITransactionItems[] | null>(null)

    const [refreshing, setRefreshing] = useState(false)

    async function getDashboard() {

        try {
            setRefreshing(true)

            await reloadProfileInCloud()

            const response = await FinanceService.GetDashboardBalance();

            setWalletStore(response);
            setCheckouts(response.checkouts);

        } catch (error) {
            Middlewares.middlewareError(
                () => Flash
                    .customMessage(
                        "Ocorreu um erro ao recuperar seu painel",
                        "Desculpe",
                        "NEUTRAL"
                    ), error
            )

        } finally {
            setRefreshing(false)
        }
    }


    return (
        <DashboardContext.Provider value={{
            getDashboard, walletStore, checkouts, refreshing
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider
