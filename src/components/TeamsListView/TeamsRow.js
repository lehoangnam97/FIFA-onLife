import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {blackText, greenText, whiteText} from "../../styles/text";

export class TeamHeader extends Component {
    render() {
        const {section, index, isActive, sections} = this.props;
        return (
            <View style={headerStyles.container}>
                <View style={headerStyles.imageContainer}>
                    <Image style={headerStyles.image} source={{uri: section.url}}/>
                    <Text style={headerStyles.title}>{section.name}</Text>

                </View>
                <View style={headerStyles.infoContainer}>
                    <Text style={headerStyles.title}>{section.captain}</Text>
                </View>
            </View>
        )
    }
}

export class TeamContent extends Component {
    render() {
        const {section, index, isActive, sections,onCallPress, onFollowTeamPress , onViewTeamPress } = this.props;
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
                                      onFollowTeamPress(section);
                                  }}>
                    <Text style={contentStyles.greenTitle}>Theo dõi đội</Text>
                </TouchableOpacity>

                <TouchableOpacity style={contentStyles.whiteButton}
                                  onCall={() => {
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
        borderTopWidth: 1, borderColor: '#bdc3c7',
        elevation:5,
        backgroundColor: 'white'
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
    title: StyleSheet.flatten(blackText.subTitle),
    data: StyleSheet.flatten(blackText.data)
});

const contentStyles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        aspectRatio: 10,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'white', elevation: 5,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 5,
    },
    greenButton: {
        borderRadius: 10, borderWidth: 2, borderColor: '#16a085',
        alignItems: 'center', justifyContent: 'center',
        margin: 3, padding: 2,
        flex: 2
    },
    whiteButton: {
        borderRadius: 10, backgroundColor: '#16a085',
        margin: 3, padding: 2,
        alignItems: 'center', justifyContent: 'center',
        flex: 1
    },
    whiteTitle: StyleSheet.flatten(whiteText.subTitle),
    greenTitle: StyleSheet.flatten(greenText.subTitle)
});



