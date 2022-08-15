import React from 'react'
import { WelcomeLogoImage } from '../../../../assets/images/welcome-logo-image'
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../component/button'
import { useNavigation } from '@react-navigation/native'
import {
	Wrapper,
	ImageBackgroundWelcomeIcons,
	ContainerButtons,
	Enter,
	EnterDesc,
	ContainerEnter,
} from './styles'
import { IAuthStackParams } from '../../../settings/@types/iauth-stack-params';

export const WelcomeScreen: React.FC = () => {
	const navigation = useNavigation<StackNavigationProp<IAuthStackParams>>()

	return (
		<Wrapper>
			<WelcomeLogoImage style={{ marginLeft: '5%' }} />
			<ImageBackgroundWelcomeIcons
				source={require('../../../../assets/images/welcome-login-icons-image.png')}
			/>
			<ContainerButtons>
				<Button
					text={'ABRIR CONTA'}
					onPress={() => navigation.navigate('Register')}
					styleContainer={{ flex: 1.5 }}
				/>
				<ContainerEnter onPress={() => navigation.navigate('Login')}>
					<Enter>Entrar</Enter>
					<EnterDesc>Já tenho conta</EnterDesc>
				</ContainerEnter>
			</ContainerButtons>
		</Wrapper>
	)
}
