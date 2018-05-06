import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {greyText, whiteText, blackText} from '../../styles/text';
import PropTypes from 'prop-types'

const propTypes = ({
    style: PropTypes.any,
});

const defaultProps = {
    style: {},
};


export default class PostDealStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, deal} = this.props;
        return (
            <View style={[styles.container, style]}>

                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Loại đội bóng :</Text>
                    <Text style={styles.chosenText}>{deal.type}</Text>
                </View>

                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Độ tuổi :</Text>
                    <Text style={styles.chosenText}>{deal.age}</Text>
                </View>

                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Khu vực :</Text>
                    <Text style={styles.chosenText}>{deal.position}</Text>
                </View>

                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Loại kèo :</Text>
                    <Text style={styles.chosenText}>{deal.dealType}</Text>
                </View>


                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Ngày :</Text>
                    <Text style={styles.chosenText}>{deal.date}</Text>
                </View>


                <View style={styles.subContentContainer}>
                    <Text style={styles.subTitleText}>Thời gian :</Text>
                    <Text style={styles.contentText}>{deal.time1} - {deal.time2}</Text>
                </View>
            </View>
        )
    }
}

PostDealStep.propTypes = propTypes;
PostDealStep.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {flex: 1},
    stepButtonContainer: {flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', margin: 10},
    subContentContainer: {margin: 10, width: '100%', justifyContent: 'space-between', flexDirection:'row'},
    subTitleText: StyleSheet.flatten(blackText.data),
    contentText: StyleSheet.flatten(blackText.data),

});