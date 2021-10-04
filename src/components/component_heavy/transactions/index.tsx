import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { CouponService } from '../../../services/coupon_service';
import { TransactionItem } from '../../component/transaction_item';
import { ITransactionItems } from './interfaces';
import { PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";

import { TransactionsSubtitle, Wrapper, NothingTransactionSubtitle, PlaceHolderWrapper, PlaceHolderContent } from './styles';



export const Transactions: React.FC = () => {

	const [couponTransactions, setCouponTransactions] = useState<ITransactionItems[] | null>(null)
	const [refreshing, setRefreshing] = useState(false)

	useEffect(() => {
		setTimeout(() => { getCheckouts() }, 2000)
	}, [])

	async function getCheckouts() {
		setRefreshing(true)
		const data = await CouponService.getCheckoutTransactions()

		setCouponTransactions(data);
		setRefreshing(false)
	}


	return (
		<Wrapper>
			<TransactionsSubtitle>Transações</TransactionsSubtitle>

			{
				couponTransactions === null &&
				<PlaceHolderWrapper
					Animation={Fade}
					Left={PlaceholderMedia}
					Right={PlaceholderMedia}
				>
					<PlaceHolderContent />
					<PlaceholderLine />
				</PlaceHolderWrapper>
			}

			{
				couponTransactions?.length === 0 &&
				<NothingTransactionSubtitle>Nenhuma transação ainda</NothingTransactionSubtitle>
			}

			{couponTransactions && <FlatList
				refreshing={refreshing}
				onRefresh={getCheckouts}
				data={couponTransactions}
				keyExtractor={item => `${item.id}`}
				style={{ width: '100%' }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) =>
					<View style={{ height: 60 }}>
						<TransactionItem
							influencer={item.influencer_name}
							date={item.created_at?.ToDateFormat()}
							coupon={item.code}
							amount={item.amount}
						/>
					</View>
				}
			/>}
		</Wrapper>
	);
}
