import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon as ElementsIcon} from 'react-native-elements';

import {ConfirmDialog} from 'react-native-simple-dialogs';
import PropTypes from 'prop-types'
import {blackText, greenText} from "../styles/text";
import SlidingUpPanel from 'rn-sliding-up-panel'
import call from 'react-native-phone-call'

const propTypes = ({
    deal: PropTypes.any,
    style: PropTypes.any,
    visible: PropTypes.bool,
    showBackdrop: PropTypes.bool,
    allowDragging: PropTypes.bool,
    onCallPress: PropTypes.func,
    onMakeDealPress: PropTypes.func,
    onViewTeamPress: PropTypes.func,
    onConfirmMakeDealPress: PropTypes.func,
    onCancelMakeDealPress: PropTypes.func,
    onTouchOutsideDialog: PropTypes.func,
    onRequestClose: PropTypes.func,
    draggableRange: PropTypes.shape({
        top: PropTypes.number,
        bottom: PropTypes.number
    }),
});

const defaultProps = {
    deal: {url: "", name: "", type: "", age: "", position: "", time1: "", time2: ""},
    style: {},
    draggableRange: {top: 200, bottom: 5},
    showBackdrop: false,
    visible: true,
    allowDragging: true,
    onCallPress() {
    },
    onMakeDealPress() {
    },
    onViewTeamPress() {
    },
    onConfirmMakeDealPress() {
    },
    onCancelMakeDealPress() {
    },
    onTouchOutsideDialog() {
    },
    onRequestClose() {
    }
};


export default class DealSlidingUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false
        };
        this.onCallPress = this.onCallPress.bind(this);
        this.onMakeDealPress = this.onMakeDealPress.bind(this);
        this.onViewTeamPress = this.onViewTeamPress.bind(this);
        this.onConfirmMakeDealPress = this.onConfirmMakeDealPress.bind(this);
        this.onCancelMakeDealPress = this.onCancelMakeDealPress.bind(this);
        this.onTouchOutsideDialog = this.onTouchOutsideDialog.bind(this);
        this.onRequestClose = this.onRequestClose.bind(this);
    };

    onCallPress() {
        const {onCallPress} = this.props;
        call({number: this.props.deal.phone, prompt: false}).catch(console.error)
        onCallPress();
    }

    onMakeDealPress() {
        const {onMakeDealPress} = this.props;
        this.setState({dialogVisible: true});
        onMakeDealPress();
    }

    onViewTeamPress() {
        const {onViewTeamPress} = this.props;
        onViewTeamPress();
    }

    onConfirmMakeDealPress() {
        const {onConfirmMakeDealPress} = this.props;
        onConfirmMakeDealPress();
    }

    onCancelMakeDealPress() {
        const {onCancelMakeDealPress} = this.props;
        onCancelMakeDealPress();
    }

    onTouchOutsideDialog() {
        const {onTouchOutsideDialog} = this.props;
        this.setState({dialogVisible: false});
        onTouchOutsideDialog();
    }

    onRequestClose() {
        const {onRequestClose} = this.props;
        onRequestClose();
    }

    render() {
        const {deal, visible, allowDragging, draggableRange, showBackdrop} = this.props;
        const containerHeight = Math.abs(draggableRange.top - draggableRange.bottom - 20);
        return (
            <SlidingUpPanel
                ref={c => this._panel = c}
                visible={visible}
                allowDragging={allowDragging}
                draggableRange={draggableRange}
                showBackdrop={showBackdrop}
                onRequestClose={() => this.onRequestClose}
            >
                <View style={[styles.container, {height: containerHeight}, this.props.style]}>
                    <ConfirmDialog
                        title="Xác nhận"
                        message="Bạn có chắc chắn muốn mời đấu đội này không?"
                        visible={this.state.dialogVisible}
                        onTouchOutside={() => this.onTouchOutsideDialog()}
                        positiveButton={{title: "Có", onPress: () => this.onConfirmMakeDealPress}}
                        negativeButton={{title: "Không", onPress: () => this.onCancelMakeDealPress}}
                    />

                    <View style={styles.dragHandleView}>
                        <ElementsIcon name="drag-handle" size={20}/>
                    </View>

                    <View style={styles.infoContainer}>

                        <View style={{flex: 2}}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{uri: deal.url}}/>
                                <Text style={styles.nameText}> {deal.name}</Text>
                            </View>
                        </View>

                        <View style={{flex: 3, marginTop: 10}}>
                            <Text style={styles.infoText}> {"Tìm kèo :" + deal.type}</Text>
                            <View style={styles.infoRowContainer}>
                                <ElementsIcon name="location-on" size={20} color="#2c3e50"/>
                                <Text style={styles.infoText}> {deal.position}</Text>
                            </View>

                            <View style={styles.infoRowContainer}>
                                <ElementsIcon name="date-range" size={20} color="#2c3e50"/>
                                <Text style={styles.infoText}>{" " + deal.date}</Text>
                            </View>

                            <View style={styles.infoRowContainer}>
                                <ElementsIcon name="access-time" size={20} color="#2c3e50"/>
                                <Text style={styles.infoText}>{"  " + deal.time1}</Text>
                                <Text style={styles.infoText}>{"  " + deal.time2}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.buttonsContainer}>

                        <TouchableOpacity style={styles.button}
                                          onPress={() => {
                                              this.onCallPress();
                                          }}>
                            <ElementsIcon size={28} name="call" color="#16a085"/>
                            <Text style={styles.buttonText}>Liên hệ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                                          onPress={() => {
                                              this.onMakeDealPress();
                                          }}>
                            <ElementsIcon size={28} name="call" color="#16a085"/>
                            <Text style={styles.buttonText}>Mời đấu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                                          onPress={() => {
                                              this.onViewTeamPress();
                                          }}>
                            <ElementsIcon size={28} name="person-add" color="#16a085"/>
                            <Text style={styles.buttonText}>Thông tin đội</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SlidingUpPanel>
        );
    }
}

DealSlidingUp.propTypes = propTypes;
DealSlidingUp.defaultProps = defaultProps;


const styles = StyleSheet.create({
    container: {width: '100%', height: 200, borderRadius: 5, elevation: 3, backgroundColor:'white'},

    dragHandleView: {alignItems: 'center', justifyContent: 'center', height: 5, width: '100%'},

    imageContainer: {alignItems: 'center', height: 100},

    image: {width: '15%', aspectRatio: 1, margin: 15},

    nameText: StyleSheet.flatten(blackText.subTitle),


    infoRowContainer: {flexDirection: 'row', alignItems: 'center'},

    infoText: StyleSheet.flatten(blackText.data),


    infoContainer: {flex: 2, justifyContent: 'center', flexDirection: 'row', marginTop: 10},

    buttonsContainer: {flexDirection: 'row', flex: 1, marginTop: 10, justifyContent: 'center'},

    button: {flex: 1, alignItems: 'center', justifyContent: 'center'},

    buttonText: StyleSheet.flatten(greenText.data)
});