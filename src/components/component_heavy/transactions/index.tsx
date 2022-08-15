import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { TransactionItem } from '../../component/transaction_item';
import { PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";
import { TransactionsSubtitle, Wrapper, NothingTransactionSubtitle, PlaceHolderWrapper, PlaceHolderContent } from './styles';
import { DashboardContext } from '../../../contexts/dashboard_context';



export const Transactions: React.FC = () => {

	const { checkouts, refreshing, getDashboard } = useContext(DashboardContext)

	return (
		<Wrapper>
			<TransactionsSubtitle>Transações</TransactionsSubtitle>

			{
				checkouts === null &&
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
				checkouts?.length === 0 &&
				<NothingTransactionSubtitle>Nenhuma transação ainda</NothingTransactionSubtitle>
			}

			{checkouts && <FlatList
				refreshing={refreshing}
				onRefresh={getDashboard}
				data={checkouts}
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
