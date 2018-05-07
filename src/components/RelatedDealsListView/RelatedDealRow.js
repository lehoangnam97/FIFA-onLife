import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {blackText, greenText} from "../../styles/text";
import {showLocation} from 'react-native-map-link'
import {getDayOfWeek} from "../../ultils/getDayOfWeek";


export class RelatedDealRow extends Component {

    render() {
        {
            const {rowData, onPress} = this.props;
            const dateArray = rowData.date.split("/");
            const date = new Date(dateArray[2], dateArray[1], dateArray[0]);

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

const black = {...StyleSheet.flatten(blackText.data), ...{margin: 10}};
console.log(black);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 3,
        borderTopWidth: 2,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#7f8c8d"
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 100,
        margin: 5
    },
    vsText: {alignSelf: 'center', color: '#26AF5F', fontWeight: 'bold'},

    nameText: {alignSelf: 'center', color: '#156637', fontWeight: 'bold', fontSize: 18, margin: 5},
    header: {flex: 2, flexDirection: 'row', backgroundColor: '#ecf0f1', padding: 5},

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
        ...StyleSheet.flatten(blackText.data),
        ...{
            marginLeft: 10,
            marginRight: 10,
            color: 'blue',
            textDecorationLine: 'underline'
        }
    },
    tail: {flexDirection: 'row', justifyContent: 'space-between', marginRight: 5, marginLeft: 5},
    dataText: {...StyleSheet.flatten(blackText.data), ...{marginLeft: 10, marginRight: 10}},
    stateText: {...StyleSheet.flatten(greenText.subTitle)}
});


