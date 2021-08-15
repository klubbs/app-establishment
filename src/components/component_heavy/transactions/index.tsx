import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { TransactionItem } from '../../component/transaction_item';

import { TransactionsSubtitle, Wrapper } from './styles';


export interface ITransactionItemParams {
    id: number
    influencer: string
    date: string
    coupon: string
    amount: number
}

export const Transactions: React.FC = () => {

    const [couponTransactions, setCouponTransactions] = useState<ITransactionItemParams[]>([
        { id: 1, influencer: 'Gaba', date: '20/10/21', coupon: 'GABAGRAU', amount: 5.15 },
        { id: 2, influencer: 'Gaba', date: '15/10/21', coupon: 'CKJ-9823', amount: 4.99 },
        { id: 3, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 4, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 6, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 7, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 8, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 9, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 10, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        { id: 11, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 },
        // { id: 12, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 }
        // { id: 13, influencer: 'Gaba', date: '05/02/21', coupon: 'LOP-78945', amount: 5.00 }
    ])

    return (
        <Wrapper>
            <TransactionsSubtitle>Transações</TransactionsSubtitle>
            <FlatList
                data={couponTransactions}
                keyExtractor={item => `${item.id}`}
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <TransactionItem influencer={item.influencer} date={item.date} coupon={item.coupon} amount={item.amount} />}
            />
        </Wrapper>
    );
}
