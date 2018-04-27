import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native'
import {Icon as ElementsIcon} from 'react-native-elements'

const propTypes = ({
    style: PropTypes.any,
    iconName: PropTypes.string,
    visible: PropTypes.bool,
    transparent: PropTypes.bool,
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    onShow: PropTypes.func,
    onClosePressed: PropTypes.func,
    onRequestClose: PropTypes.func,
});

const defaultProps = {
    iconName: "keyboard-arrow-down",
    visible: false,
    transparent: false,
    animationType: 'none',
    onShow() {
    },
    onRequestClose() {
    },
    onClosePressed() {
    },
};

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.onShow = this.onShow.bind(this);
        this.onClosePressed = this.onClosePressed.bind(this);
        this.onRequestClose = this.onRequestClose.bind(this);
    }

    onShow() {
        const {onShow} = this.props;
        onShow();
    }

    onClosePressed() {
        const {onClosePressed} = this.props;
        onClosePressed();
    }


    onRequestClose() {
        const {onRequestClose} = this.props;
        onRequestClose();
    }


    render() {
        return (
            <Modal style={[styles.container, this.props.style]}
                   visible={this.props.visible}
                   transparent={this.props.transparent}
                   animationType={this.props.animationType}
                   onShow={this.onShow}
                   onRequestClose={this.onRequestClose}
            >
                <TouchableOpacity style={styles.header}
                                  onPress={this.onClosePressed}>
                    <ElementsIcon name={this.props.iconName} size={30}/>
                </TouchableOpacity>
            </Modal>
        );
    }
}

CustomModal.propTypes = propTypes;
CustomModal.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 3,
    },
    header: {
        width: '100%', height: 20,
        justifyContent: 'center', alignItems: 'center',
    }
});