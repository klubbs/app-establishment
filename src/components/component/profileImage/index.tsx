import React, { useContext, useState, useEffect } from 'react';
import colors from '../../../../assets/constants/colors';
import { AuthContext } from '../../../contexts/auth_context';

import { ImageProfileComponent, ContainerEmpty } from './styles';
import { ShopIcon } from '../../../../assets/icons/shop_icon';


export const ProfileImage: React.FC = () => {

	const { establishment } = useContext(AuthContext)

	return (
		<>
			{!establishment?.image &&
				<ContainerEmpty>
					<ShopIcon width={20} height={20} fill={colors.COLOR_WHITE} />
				</ContainerEmpty>
			}

			{establishment?.image && <ImageProfileComponent uri={
				`https://klubbs-establishment.s3.amazonaws.com/${establishment?.image as string}`
			} />}
		</>
	)
}
