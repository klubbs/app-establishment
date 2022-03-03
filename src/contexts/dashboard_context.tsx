import React, { createContext, useContext, useEffect, useState } from "react"
import { ITransactionItems } from "../components/component_heavy/transactions/interfaces";
import { FinanceService } from "../services/financeService";
import { Flash } from "../utils/flash";
import { Middlewares } from "../utils/middlewares";
import { AuthContext } from "./auth_context";

export const DashboardContext = createContext(
    {} as {
        getDashboard: () => Promise<void>,
        amount: number,
        checkouts: ITransactionItems[] | null,
        refreshing: boolean,
        futureCheckouts: boolean
    }
)

const DashboardProvider: React.FC = ({ children }) => {

    const { reloadProfileInCloud, establishment } = useContext(AuthContext)


    const [amount, setAmount] = useState(0.00)
    const [checkouts, setCheckouts] = useState<ITransactionItems[] | null>(null)
    const [futureCheckouts, setFutureCheckouts] = useState(true)

    const [refreshing, setRefreshing] = useState(false)

    async function getDashboard() {

        try {
            setRefreshing(true)

            await reloadProfileInCloud()

            const response = await FinanceService.GetDashboardBalance();

            setAmount(response.amount);
            setCheckouts(response.checkouts);
            setFutureCheckouts(response.checkout_in_future)

        } catch (error) {
            Middlewares.middlewareError(
                () => Flash
                    .customMessage("Ocorreu um erro ao recuperar seu painel", "Desculpe", "NEUTRAL"), error
            )

        } finally {
            setRefreshing(false)
        }
    }


    return (
        <DashboardContext.Provider value={{
            getDashboard, amount, checkouts, refreshing, futureCheckouts
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider
