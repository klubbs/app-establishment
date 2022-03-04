import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Modal, Platform, Animated, View } from 'react-native';
import Button from '../../component/button';
import { BackgroundBlur, Container, YellowBalanceContainer, WhiteBalanceContainer, Balance, CancelClick, Cancel, BalanceSubtitle, RealBalance, ContainerWrapper } from './styles';
import { IRequestBalanceRef } from './@types';
import { FinanceService } from '../../../services/financeService';
import { Flash } from '../../../utils/flash';
import { Spinner } from '../../component/spinner';
import * as Haptic from 'expo-haptics';


const BALANCES = [
    { key: 'BALANCE29_99', amount: 29.99 },
    { key: 'BALANCE99_99', amount: 99.99 },
    { key: 'BALANCE249_99', amount: 249.99 },
    { key: 'BALANCE499_99', amount: 499.99 }
]

export const RequestBalance = React.forwardRef<IRequestBalanceRef, {}>((props, ref) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const [selectedBalance, setSelectedBalance] = useState<string>('')
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)


    useImperativeHandle(ref, () => ({
        openModal: () => openModal(),
    }));


    function openModal() {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start();

        setShowModal(true)
    }

    function closeModal() {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }
        ).start();

        setTimeout(() => {
            setSelectedBalance('')
            setShowModal(false)
        }, 300)
    }

    async function requestBalance() {

        try {
            setLoading(true)

            await FinanceService.RequestBalance(selectedBalance);

            Flash.customMessage(
                'Enviamos o link para pagamento no seu email',
                'Pagamento solicitado'
            )

            Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Light)

            closeModal()

        } catch (error) {
            Flash.customMessage(
                'Tente novamente mais tarde',
                'Ocorreu um erro'
            )
        } finally {
            setLoading(false)
        }

    }


    return (
        <Modal
            presentationStyle={'overFullScreen'}
            animationType={"slide"}
            transparent={true}
            visible={showModal}
        >
            <Spinner loading={loading} />

            <BackgroundBlur style={{ opacity: fadeAnim }} />

            <ContainerWrapper>

                <CancelClick onPress={() => closeModal()}>
                    <Cancel />
                </CancelClick>

                <Container>

                    {
                        BALANCES.map((i) => {

                            const enableBalance = selectedBalance === i.key

                            return (
                                <WhiteBalanceContainer
                                    key={i.key}
                                    onPress={() => setSelectedBalance(i.key)}
                                >
                                    <YellowBalanceContainer active={enableBalance}>
                                        <BalanceSubtitle active={enableBalance} >
                                            ADICIONAR
                                        </BalanceSubtitle>
                                        <Balance active={enableBalance}>
                                            {i.amount}
                                        </Balance>
                                    </YellowBalanceContainer>
                                    <RealBalance active={enableBalance}>
                                        {
                                            Platform.select({
                                                ios: i.amount
                                                    .toLocaleString('pt-br',
                                                        { style: 'currency', currency: 'BRL' }),
                                                android: `R$ ${i.amount}`
                                            })
                                        }</RealBalance>
                                </WhiteBalanceContainer>
                            )
                        })
                    }

                    <Button
                        disabled={!selectedBalance}
                        onPress={requestBalance}
                        text={'Solicitar saldo'}
                    />

                </Container>
            </ContainerWrapper>

        </Modal>
    );
})