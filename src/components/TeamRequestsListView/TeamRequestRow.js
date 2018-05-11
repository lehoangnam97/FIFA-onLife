import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import CircleImage from '../CircleImage'
import {borderColorRegular, mainColor} from "../../styles/color";
import {subText} from "../../styles/text";
import {iconSize} from "../../styles/icon";

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
                            <Icon size={iconSize.regular} name="md-checkmark-circle" color=mainColor/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.denyButton}
                                          onPress={() => {
                                              denyTeamRequest(rowData);
                                          }}>
                            <Icon size={iconSize.regular} name="md-remove-circle" color="#e74c3c"/>
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
        borderColor:borderColorRegular
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
        borderRadius: 20, borderColor: mainColor, borderWidth: 2,
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
    blackText: StyleSheet.flatten(subText.contentColor),
    greenText: StyleSheet.flatten(subText.main),
});
