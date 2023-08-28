import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Container, DisableActionContainer, DisableActionContainerColor, EmptyText, EnableContainer, EnableTitle, PercentualTitle, SideContainer, ValidAtTitle, Wrapper } from './styles';
import { StatusBar } from 'expo-status-bar';
import { OfferService } from '../../../services/offer-service';
import { IGetStoreOffers } from '../../../services/@types/@offer-service';
import { DaysOfWeek } from '../../component/DaysOfWeek';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';
import colors from '../../../../assets/constants/colors';
import { Spinner } from '../../component/spinner';
import { Flash } from '../../../utils/flash';
import * as Haptic from 'expo-haptics';

// import { Container } from './styles';

const MyOffers: React.FC = () => {
	const [storeOffers, setStoreOffers] = useState<IGetStoreOffers[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getOffers()
	}, [])

	async function getOffers() {
		try {
			setLoading(true)
			const allOffers = await OfferService.getStoreOffers()

			setStoreOffers(allOffers.sort(function (a, b) {
				return (new Date(b.created_at) as any - (new Date(a.created_at) as any))
			}))

		} catch (error) {
			Flash.customMessage(
				'Aconteceu um inesperado ao recuperar suas ofertas.',
				'Tivemos um pequeno errinho',
				'WARNING')
		} finally {
			setLoading(false)
		}

	}

	function handleDisableOfflineOffer(disabledId: string) {
		let indexOffer = storeOffers.findIndex(x => x.id == disabledId)
		const replacedOffers = storeOffers


		if (indexOffer > -1) {

			let offer = storeOffers[indexOffer]

			offer.is_invalidated = true;

			replacedOffers.splice(indexOffer, 1)

			setStoreOffers([...replacedOffers, offer])
		}

	}

	async function handleDisableOffer(offerId: string, isInvalidated: boolean) {
		try {

			if (isInvalidated) {
				Haptic.notificationAsync(Haptic.NotificationFeedbackType.Warning);
				return
			}

			setLoading(true);

			await OfferService.disableOffer(offerId);

			handleDisableOfflineOffer(offerId)

			Flash.customMessage(
				"Desabilitada e não pode mais ser utilizada",
				"Desabilitada com sucesso",
				"SUCCESS")

			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Success);

		} catch (error) {
			Flash.customMessage(
				'Nos desculpe, já estamos cuidando do erro.', 'Ocorreu um erro não esperado', 'WARNING')

			Haptic.notificationAsync(Haptic.NotificationFeedbackType.Error);

		} finally {
			setLoading(false);
		}
	}

	if (!storeOffers) {

	}


	return (
		<Wrapper>
			<Spinner loading={loading} />
			<StatusBar style='dark' animated={true} />

			<FlatList
				data={storeOffers}
				keyExtractor={item => `${item.id}`}
				style={{ width: '100%', paddingHorizontal: 10, marginTop: 50, paddingBottom: '10%' }}
				ListEmptyComponent={() => <EmptyText>Você ainda não criou nenhuma oferta 😕</EmptyText>}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) =>
					<Swipeable
						key={item.id}
						renderRightActions={() => {
							return (
								<DisableActionContainer onPress={() => handleDisableOffer(
									item.id, item.is_invalidated)}>
									<DisableActionContainerColor invalidated={item.is_invalidated}>
										<Feather name="power" size={20} color={colors.COLOR_WHITE} />
									</DisableActionContainerColor>
								</DisableActionContainer>
							);
						}}
					>
						<Container>
							<View style={{ flex: 0.2 }}>
								<PercentualTitle>{item.off_percentual}%</PercentualTitle>
							</View>
							<SideContainer>
								<View style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}>
									<EnableContainer disable={item.is_invalidated}>
										<EnableTitle>{
											item.is_invalidated ? 'Inativa' : 'Ativa'
										}</EnableTitle>
									</EnableContainer>
									<ValidAtTitle>{item.valid_at
										.ToDateFormat()
										.toLocaleTimeString("pt-br",
											{
												formatMatcher: "best fit",
												day: 'numeric',
												month: 'numeric',
												hour: '2-digit',
												minute: '2-digit',
												year: '2-digit'
											})}</ValidAtTitle>
								</View>
								<DaysOfWeek onlyRead startValues={item.working_days} />

							</SideContainer>
						</Container>
					</Swipeable>
				}
			/>

		</Wrapper>
	);
}

export default MyOffers;
