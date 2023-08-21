import React, { useEffect, useState, useContext, useRef } from "react";
import { Platform, RefreshControl } from "react-native";
import { Skeleton } from "@motify/skeleton";
import { MotiView } from "moti";
import {
	ValueSubtitle,
	Wrapper,
	Amount,
	WrapperAmount,
	OnlineStoreContainer,
	OnlineText,
} from "./styles";
import colors from "../../../../assets/constants/colors";
import { DashboardContext } from "../../../contexts/dashboard-context";
import { Flash } from "../../../utils/flash";
import { AuthContext } from "../../../contexts/auth-context";

export const DashboardAmount: React.FC = () => {
	const { establishment } = useContext(AuthContext);
	const { getDashboard, walletStore, refreshing } =
		useContext(DashboardContext);

	const [showSkeleton, setShowSkeleton] = useState(true);

	const amountCheckouts = walletStore?.checkouts_amount ?? 0;

	useEffect(() => {
		getDashboardWithSkeleton();
	}, []);

	async function getDashboardWithSkeleton() {
		try {
			setShowSkeleton(true);

			await getDashboard();
		} finally {
			setShowSkeleton(false);
		}
	}

	function handleEnableForUsers() {
		Flash.customMessage(
			"Crie ao menos uma oferta de 5%",
			"Crie uma oferta mínima"
		);
	}

	return (
		<Wrapper
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={getDashboardWithSkeleton}
					tintColor={colors.COLOR_WHITE}
					colors={[colors.COLOR_WHITE]}
				/>
			}
		>
			{!establishment?.can_show_users_home && (
				<OnlineStoreContainer onPress={handleEnableForUsers}>
					<OnlineText>Você não esta visível para os usuários</OnlineText>
				</OnlineStoreContainer>
			)}
			<ValueSubtitle>Transacionado em checkouts</ValueSubtitle>
			<WrapperAmount>
				<MotiView>
					<Skeleton show={showSkeleton} colorMode={"light"}>
						<Amount>
							{Platform.select({
								ios: amountCheckouts.toLocaleString("pt-br", {
									style: "currency",
									currency: "BRL",
								}),
								android: `R$ ${amountCheckouts}`,
							})}
						</Amount>
					</Skeleton>
				</MotiView>
			</WrapperAmount>
		</Wrapper>
	);
};
