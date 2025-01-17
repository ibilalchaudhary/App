import React from 'react';
import {View} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import HeaderWithCloseButton from '../../components/HeaderWithCloseButton';
import Navigation from '../../libs/Navigation/Navigation';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import styles from '../../styles/styles';
import userWalletPropTypes from './userWalletPropTypes';
import CONST from '../../CONST';
import ExpensifyText from '../../components/ExpensifyText';

const propTypes = {
    ...withLocalizePropTypes,
    ...userWalletPropTypes,
};

const defaultProps = {
    userWallet: {},
};

const ActivateStep = props => (
    <ScreenWrapper>
        <HeaderWithCloseButton
            title={props.translate('activateStep.headerTitle')}
            onCloseButtonPress={() => Navigation.dismissModal()}
        />
        <View style={[styles.mh5, styles.flex1]}>
            {props.userWallet.tierName === CONST.WALLET.TIER_NAME.GOLD && (
                <ExpensifyText>{props.translate('activateStep.activated')}</ExpensifyText>
            )}
            {props.userWallet.tierName === CONST.WALLET.TIER_NAME.SILVER && (
                <ExpensifyText>{props.translate('activateStep.checkBackLater')}</ExpensifyText>
            )}
        </View>
    </ScreenWrapper>
);

ActivateStep.propTypes = propTypes;
ActivateStep.defaultProps = defaultProps;
ActivateStep.displayName = 'ActivateStep';
export default withLocalize(ActivateStep);
