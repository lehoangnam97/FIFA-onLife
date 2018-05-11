import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import CircleImage from '../CircleImage'
import {BORDER_COLOR_REGULAR, PRIMARY_COLOR} from "../../styles/color";
import {SUB_TEXT_STYLES} from "../../styles/text";
import {ICON_SIZE} from "../../styles/icon";

export class TeamRequestRow extends Component {
    render() {
        {
            const {rowData, acceptTeamRequest, denyTeamRequest} = this.props;
            return (
                <TouchableOpacity style={styles.contain}>
                    <CircleImage style={styles.image}
                                 source={{uri: "http://graph.facebook.com/" + rowData.id + "/picture?type=large"}}/>

                    <View style={styles.contentContain}>

                        <View style={{flex: 1}}>
                            <Text style={styles.blackText}>{rowData.name}</Text>
                            <TouchableOpacity style={styles.viewProfileButton}>
                                <Text style={styles.greenText}>View profile</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.acceptButton}
                                          onPress={() => {
                                              acceptTeamRequest(rowData);
                                          }}>
                            <Icon size={ICON_SIZE.REGULAR} name="md-checkmark-circle" color=mainColor/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.denyButton}
                                          onPress={() => {
                                              denyTeamRequest(rowData);
                                          }}>
                            <Icon size={ICON_SIZE.REGULAR} name="md-remove-circle" color="#e74c3c"/>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>)
        }
    }

}


const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        width: '100%',
        aspectRatio: 4,
        padding: 30,
        borderTopWidth: 2,
        borderColor:BORDER_COLOR_REGULAR
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        flex: 1,
        alignSelf: 'center'
    },
    contentContain: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    viewProfileButton: {
        margin: 5,
        borderRadius: 20, borderColor: PRIMARY_COLOR, borderWidth: 2,
        width: '60%',
        alignItems: 'center', justifyContent: 'center',
    },
    acceptButton: {
        margin: 5,
        justifyContent: 'center'
    },
    denyButton: {
        margin: 5,
        justifyContent: 'center'
    },
    blackText: StyleSheet.flatten(SUB_TEXT_STYLES.CONTENT_COLOR),
    greenText: StyleSheet.flatten(SUB_TEXT_STYLES.main),
});
