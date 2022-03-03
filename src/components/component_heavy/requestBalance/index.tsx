import React from 'react';
import { Modal, View } from 'react-native';
import { Wrapper, Container } from './styles';

// import { Container } from './styles';

export const RequestBalance: React.FC = () => {
    return (
        <Modal
            presentationStyle={'overFullScreen'}
            animationType={"slide"}
            transparent={true}
            visible={true}
        >

            <Wrapper>

                <Container></Container>

            </Wrapper>

        </Modal>
    );
}