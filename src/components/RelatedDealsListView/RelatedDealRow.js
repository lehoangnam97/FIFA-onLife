import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

import {showLocation} from 'react-native-map-link'
import {getDayOfWeek} from "../../ultils/getDayOfWeek";
import {BACKGROUND_COLOR_TWO, BORDER_COLOR_REGULAR} from "../../styles/color";
import {CONTENT_TEXT_STYLES, CRUCIAL_TEXT_STYLES, SUB_TEXT_STYLES} from "../../styles/text";


export class RelatedDealRow extends Component {
    render() {
        {
            const {rowData, onPress} = this.props;
            return (
                <TouchableOpacity style={styles.container} onPress={() => {
                    onPress(rowData);
                }}>
                    <View style={styles.header}>

                        <View style={styles.leftTeamHeaderContainer}>
                            <Text style={styles.nameText}>{rowData.name}</Text>
                            <Image style={styles.image} source={{uri: rowData.url}}/>
                        </View>

                        <Text style={styles.vsText}>VS</Text>

                        <View style={styles.rightTeamHeaderContainer}>
                            <Image style={styles.image} source={{uri: rowData.urlRq}}/>
                            <Text style={styles.nameText}>{rowData.nameRq}</Text>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.dataText}>{getDayOfWeek(rowData.date) + ", " + rowData.date}</Text>
                        <Text style={styles.dataText}>{rowData.time1} - {rowData.time2}</Text>
                        <Text style={styles.dataText}>{rowData.position}</Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.dataText}>Sân: {rowData.pitch}</Text>
                        <Text style={styles.dataText}>Kèo: {rowData.dealType}</Text>
                        <Text style={styles.dataText}>Loại đội: {rowData.type}</Text>
                        <Text style={styles.dataText}>Tuổi: {rowData.age}</Text>
                    </View>

                    <View style={styles.tail}>
                        <Text style={styles.stateText}>Trạng
                            thái: {rowData.state === 0 ? "Đang chờ" : "Đã xác nhận"}</Text>

                        <TouchableOpacity onPress={() => {
                            showLocation({latitude: rowData.latitude, longitude: rowData.longitude,});
                        }}>
                            <Text style={styles.mapText}>Xem bản đồ</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>)
        }
    }

}


const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        width: '98%',
        aspectRatio: 3,
        borderTopWidth: 2,
        backgroundColor: 'white',
        margin: 3,
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: BORDER_COLOR_REGULAR
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 100,
        margin: 5
    },
    vsText:{...StyleSheet.flatten(SUB_TEXT_STYLES.CONTENT_COLOR_TWO),...{alignSelf: 'center' }},

    nameText: {...StyleSheet.flatten(SUB_TEXT_STYLES.CONTENT_COLOR) ,...{alignSelf: 'center', margin: 5}},
    header: {flex: 2, flexDirection: 'row', backgroundColor: BACKGROUND_COLOR_TWO, padding: 5},

    leftTeamHeaderContainer: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    rightTeamHeaderContainer: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    body: {
        flexDirection: 'row',
        flex: 1,
    },

    mapText: {
        ...StyleSheet.flatten(CONTENT_TEXT_STYLES.CONTENT_COLOR),
        ...{
            marginLeft: 10,
            marginRight: 10,
            color: 'blue',
            textDecorationLine: 'underline'
        }
    },
    tail: {flexDirection: 'row', justifyContent: 'space-between', marginRight: 5, marginLeft: 5},
    dataText: {...StyleSheet.flatten(CONTENT_TEXT_STYLES.CONTENT_COLOR_TWO), ...{marginLeft: 10, marginRight: 10}},
    stateText: {...StyleSheet.flatten(SUB_TEXT_STYLES.PRIMARY_COLOR)}
});


