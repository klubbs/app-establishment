import React, { Component } from 'react';
import { StyleSheet, Modal, View } from 'react-native'
import { SpinnerLoading, Container } from './styles';
import { BlurView } from 'expo-blur';

export const Spinner: React.FC<{ loading: boolean }> = (props) => {
    return (
        <Modal animationType={'none'} visible={props.loading} transparent={true}  >
            <Container>
                <SpinnerLoading />
                <BlurView tint="dark" intensity={60} style={{ ...StyleSheet.absoluteFillObject }} />
            </Container>
        </Modal>
    )
}
