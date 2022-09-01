import React, { createContext, useContext, useEffect, useState } from "react"
import { ITransactionItems } from "../components/component-heavy/transactions/interfaces";
import { FinanceService } from "../services/finance-service";
import { Flash } from "../utils/flash";
import { Middlewares } from "../utils/middlewares";
import { AuthContext } from "./auth-context";

export const DashboardContext = createContext(
    {} as {
        getDashboard: () => Promise<void>,
        walletAmount: number,
        checkouts: ITransactionItems[] | null,
        refreshing: boolean
    }
)

const DashboardProvider: React.FC = ({ children }: any) => {
    const { reloadProfileInCloud, establishment } = useContext(AuthContext)


    const [walletAmount, setWalletAmount] = useState(0.00)
    const [checkouts, setCheckouts] = useState<ITransactionItems[] | null>(null)

    const [refreshing, setRefreshing] = useState(false)

    async function getDashboard() {

        try {
            setRefreshing(true)

            await reloadProfileInCloud()

            const response = await FinanceService.GetDashboardBalance();

            setWalletAmount(response.wallet_amount);
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
            getDashboard, walletAmount, checkouts, refreshing
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider
