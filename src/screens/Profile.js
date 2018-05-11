import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TouchableOpacity,
    View, ScrollView
} from 'react-native';
import {Icon as ElementsIcon, SocialIcon} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {width, height} from 'react-native-dimension';
import {ICON_COLOR, ICON_SIZE} from "../styles/icon";
import {BACKGROUND_COLOR, BORDER_COLOR_REGULAR, PRIMARY_COLOR} from "../styles/color";
import {CRUCIAL_TEXT_STYLES} from "../styles/text";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Nam",
                phone: "8917398",
                email: "32kdsdf@gmail.com",
                about: "",
                url: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"
            },
            modalVisible: false,
        };
        this.onBackPress = this.onBackPress.bind(this);
    }

    onBackPress() {
        this.setState({modalVisible: true});
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.headerUpper}>
                        <TouchableOpacity style={styles.backButton} onPress={this.onBackPress}>
                            <ElementsIcon name="keyboard-arrow-left" size={ICON_SIZE.REGULAR} color={BACKGROUND_COLOR}/>
                        </TouchableOpacity>
                        <Text style={styles.name}>{this.state.user.name}</Text>
                    </View>
                    <View style={styles.headerBody}/>
                    <Image style={styles.image} source={{url: this.state.user.url}}/>
                </View>


                <View style={styles.body}>
                    <View style={styles.infoRow}>
                        <Icon name="md-call" size={ICON_SIZE.REGULAR} color={ICON_COLOR.CONTENT_COLOR_TWO}/>
                        <Text style={styles.infoText}>{this.state.user.phone}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Icon name="md-mail" size={ICON_SIZE.REGULAR} color={ICON_COLOR.CONTENT_COLOR_TWO}/>
                        <Text style={styles.infoText}>{this.state.user.email}</Text>
                    </View>
                    <View style={styles.aboutRow}>
                        <Icon name="md-clipboard" size={ICON_SIZE.REGULAR} color={ICON_COLOR.CONTENT_COLOR_TWO}/>
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.infoRow}>{this.state.user.about}</Text>
                        </ScrollView>
                    </View>
                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
        container: {flex: 1},
        header: {height: width(60), backgroundColor: PRIMARY_COLOR},
        image: {
            position: 'absolute',
            borderRadius: 100,
            aspectRatio: 1,
            width: '30%',
            marginTop: width(15),
            marginLeft: 20,
            borderWidth: 2, borderColor: 'white',
            backgroundColor:BACKGROUND_COLOR
        },
        backButton: {alignSelf: 'flex-start', padding: 10},

        headerUpper: {flex: 1, backgroundColor: PRIMARY_COLOR, justifyContent: 'space-between'},
        headerBody: {flex: 1, backgroundColor: BACKGROUND_COLOR},

        name: {...StyleSheet.flatten(CRUCIAL_TEXT_STYLES.WHITE_COLOR),marginLeft: width(30) + 20, alignSelf: 'center'},
        socialButtonContainer: {flexDirection: 'row', marginLeft: width(30) + 20, alignSelf: 'center'},
        socialIcon: {width: 30, height: 30, marginRight: 3},

        body: {flex: 1, backgroundColor: 'white'},
        infoRow: {flexDirection: 'row', marginTop: 10, marginLeft: 20, marginRight: 20},
        aboutRow: {flexDirection: 'row', marginTop: 10, marginLeft: 20, marginRight: 20, flex: 1},
        infoText: {borderBottomWidth: 1, borderColor: BORDER_COLOR_REGULAR, padding: 10, flex: 1},
        scrollView: {flexWrap: 'wrap'}
    }
);