import React, {Component} from 'react';
import {Icon as EleIcon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {StyleSheet, TextInput, View, Text, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
import SocialIcon from "react-native-elements/src/social/SocialIcon";
import Spinner from 'react-native-loading-spinner-overlay';
import CircleImage from "../components/CircleImage";
import EditProfileInput from '../components/EditProfileInput'
import CONTAINER from '../styles/container'
import {BACKGROUND_COLOR, BORDER_COLOR_REGULAR} from "../styles/color";
import {ICON_COLOR, ICON_SIZE} from "../styles/icon";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            textInputId: "",
            textInputName: "Ronaldo",
            textInputEmail: "",
            textInputAbout: "",
            textInputPhoneNumber: "",
            url: "http://media.hotbirthdays.com/thumb_x200x204/upload/2015/09/24/cristiano-ronaldo.jpg",
        }
    };

    navigateBack = () => {
    };

    updateProfileData = () => {
    };

    pickImage = () => {
    };

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Spinner visible={this.state.isLoading}>
                        <ActivityIndicator style={styles.activityIndicator} size="large"/>
                    </Spinner>

                    <ImageBackground style={styles.imageBackground} source={{uri: this.state.url}}>

                        <View style={[styles.header,{backgroundColor: 'rgba(0,0,0,0.65)'}]}>
                            <TouchableOpacity onPress={this.navigateBack}
                                              style={styles.navigateBackButton}>
                                <EleIcon size={28} name="keyboard-backspace" color="white"/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.updateProfileData}
                                              style={styles.doneButton}>
                                <EleIcon size={28} name="done" color="white"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.imageContainer}>

                            <TouchableOpacity onPress={this.pickImage}
                                              style={styles.imageTouchable}>
                                <CircleImage style={styles.image} source={{uri: this.state.url}}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.pickImage}
                                              style={styles.updateImageButton}>
                                <EleIcon size={20} name="create" color="#ecf0f1"/>
                                <Text style={{color: 'white', fontSize: 15}}>Cập nhật ảnh đại diện</Text>
                            </TouchableOpacity>

                            {/*<View style={styles.socialButtonContainer}>*/}
                                {/*<SocialIcon iconSize={20} style={styles.socialButton} type='facebook'/>*/}
                                {/*<SocialIcon iconSize={20} style={styles.socialButton} type='twitter'/>*/}
                                {/*<SocialIcon style={[styles.socialButton, {backgroundColor: '#D42F8A'}]}*/}
                                            {/*iconSize={20} type='instagram'/>*/}
                            {/*</View>*/}
                        </View>
                    </ImageBackground>


                    <View style={styles.editContainer}>
                        <EditProfileInput placeholder="Enter your name..."
                                          value={this.state.textInputName}
                                          iconName="email"
                                          onChangeText={text => {
                                              this.setState({textInputName: text})
                                          }}/>

                        <EditProfileInput placeholder="Enter your phone number..."
                                          value={this.state.textInputPhoneNumber}
                                          iconName="email"
                                          onChangeText={text => {
                                              this.setState({textInputPhoneNumber: text})
                                          }}
                        />

                        <EditProfileInput placeholder="Enter your mail..."
                                          value={this.state.textInputEmail}
                                          iconName="email"
                                          onChangeText={text => {
                                              this.setState({textInputEmail: text})
                                          }}
                        />


                        <View style={styles.textInputAboutContainer}>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <EleIcon size={ICON_SIZE.REGULAR} name="chrome-reader-mode" color={ICON_COLOR.CONTENT_COLOR_TWO}/>
                            </View>
                            <TextInput
                                placeholder="About.." multiline={true} numberOfLines={4}
                                value={this.state.textInputAbout}
                                onChangeText={TextInputAbout => this.setState({TextInputAbout})}
                                underlineColorAndroid='transparent' placeholderTextColor='#bdc3c7'
                                style={styles.textInputAbout}
                            />
                        </View>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {flex: 1},

    activityIndicator: {alignSelf: 'center'},

    header: StyleSheet.flatten(CONTAINER.headerContainer),

    navigateBackButton: StyleSheet.flatten(CONTAINER.headerLeftButton),

    doneButton: StyleSheet.flatten(CONTAINER.headerRightButton),

    imageBackground: {height: 300, width: '100%', justifyContent: 'center', alignItems: 'center'},


    imageContainer: {flex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.65)', alignItems: 'center'},

    imageTouchable: {
        width: 150, height: 150,
        backgroundColor: 'transparent', borderWidth: 2, borderColor: BORDER_COLOR_REGULAR, borderRadius: 85,
        alignItems: 'center', justifyContent: 'center'
    },

    updateImageButton: {
        marginTop: 10, alignItems: 'center',
        flexDirection: 'row', justifyContent: 'center'
    },

    socialButtonContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},

    socialButton: {width: 30, height: 30},

    editContainer: {flex: 1, width: '100%', alignItems: 'center', backgroundColor: BACKGROUND_COLOR},

    textInputAboutContainer: {
        width: '90%', borderBottomColor: BORDER_COLOR_REGULAR, flexDirection: 'row', justifyContent: 'flex-start'
    },

    textInputAbout: {
        width: '100%', height: 80, marginLeft: 20,
        textAlignVertical: 'top',
        borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#ecf0f1'
    },
});