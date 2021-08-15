import React, { useState } from 'react';
import { Modal } from 'react-native';
import colors from '../../../../assets/constants/colors';
import { InfoIcon } from '../../../../assets/icons/info_icon';
import { CouponCreateImage } from '../../../../assets/images/coupon-create-svg';
import Button from '../../component/button';
import { PickerNumber } from '../../component/picker_number';

import { Wrapper, Container, Off, Rules, RulesSubtitle, SubContainer, ValidSubtitle, DatePicker, Cancel } from './styles';

export const CouponCreate: React.FC<{ visible: boolean, onCancellCb: any }> = (props) => {

    const [rulesValue, setRulesValue] = useState('')
    const [offValue, setOffValue] = useState(0)
    const [validAtValue, setValidAtValue] = useState(new Date(Date.now()));


    const onChangeDate = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || validAtValue;
        setValidAtValue(currentDate);
    };

    return (
        <Modal animationType={'slide'} transparent={true} visible={props.visible}>
            <Wrapper>
                <Cancel onPress={props.onCancellCb} />

                <Container>
                    <CouponCreateImage width={'95%'} height={'50%'} />
                    <Off>{offValue}%</Off>

                    <ValidSubtitle>Válido até</ValidSubtitle>
                    <DatePicker value={validAtValue} onChange={onChangeDate} />

                    <RulesSubtitle>Regras do cupom <InfoIcon width={10} height={10} fill={colors.COLOR_YELLOW_BUTTON_TEXT} /></RulesSubtitle>
                    <Rules value={rulesValue} onChangeText={(e) => setRulesValue(e)} />
                </Container>

                <SubContainer>
                    <PickerNumber value={offValue} setValue={(e: any) => setOffValue(e)} />
                </SubContainer>

                <Button text={'CRIAR CUPOM'} onPress={() => { }} styleContainer={{ width: '90%' }} />

            </Wrapper>
        </Modal>
    );
}
