import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

import {backgroundColor, borderColorRegular, mainColor} from "../../styles/color";
import {contentText, subText} from "../../styles/text";

export class DealsHeader extends Component {
    render() {
        const {section, index, isActive, sections} = this.props;
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.imageContainer}>
                    <Image style={headerStyles.image} source={{uri: section.url}}/>
                    <Text style={headerStyles.title}>{section.name}</Text>
                </View>
                <View style={headerStyles.infoContainer}>
                    <Text style={headerStyles.data}>Loại kèo: {section.dealType}</Text>
                    <Text style={headerStyles.data}>Loại đội: {section.type}</Text>
                    <Text style={headerStyles.data}>Tuổi: {section.age}</Text>
                    <Text style={headerStyles.data}>Sân: {section.pitch}</Text>
                    <Text style={headerStyles.data}>Khu vực: {section.position}</Text>
                    <Text style={headerStyles.data}>{section.date}</Text>
                    <Text style={headerStyles.data}>{section.time1 + " - " + section.time2}</Text>
                </View>
            </View>
        )
    }
}

export class DealsContent extends Component {
    render() {
        const {section, index, isActive, sections, onCallPress, onViewTeamPress, onMakeDealPress} = this.props;
        return (
            <View style={contentStyles.container}>
                <TouchableOpacity style={contentStyles.greenButton}
                                  onPress={() => {
                                      onViewTeamPress(section);
                                  }}>
                    <Text style={contentStyles.greenTitle}>Xem đội</Text>
                </TouchableOpacity>

                <TouchableOpacity style={contentStyles.greenButton}
                                  onPress={() => {
                                      onMakeDealPress(section);
                                  }}>
                    <Text style={contentStyles.greenTitle}>Mời thách đấu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={contentStyles.whiteButton}
                                  onPress={() => {
                                      onCallPress(section);
                                  }}>
                    <Text style={contentStyles.whiteTitle}>Gọi</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        aspectRatio: 3,
        padding: 30,
        borderTopWidth: 1, borderColor: borderColorRegular,
        elevation:5,
        backgroundColor: backgroundColor
    },
    imageContainer:{
      flex:1
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        flex: 2,
        alignSelf: 'center'
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: StyleSheet.flatten(subText.contentColor),
    data: StyleSheet.flatten(contentText.contentColor2)
});

const contentStyles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        aspectRatio: 10,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: backgroundColor, elevation: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 5,
    },
    greenButton: {
        borderRadius: 10, borderWidth: 2, borderColor: mainColor,
        alignItems: 'center', justifyContent: 'center',
        margin: 3, padding: 2,
        flex: 2
    },
    whiteButton: {
        borderRadius: 10, backgroundColor: mainColor,
        margin: 3, padding: 2,
        alignItems: 'center', justifyContent: 'center',
        flex: 1
    },
    whiteTitle: StyleSheet.flatten(subText.whiteColor),
    greenTitle: StyleSheet.flatten(subText.mainColor)
});



