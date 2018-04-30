import React, {Component} from 'react';
import {View} from "react-native"
import SplashScreen from "../components/SplashScreen";
import globalStore from "../config/globalStore";

var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: "nam",
            name: "",
            url: "https://facebook.github.io/react-native/docs/assets/favicon.png",
            phone: "",
            email: "",
            about: "",
        };

        globalStore.register('Login',
            (s) => this.setState(s),
            () => {
                return this.state
            });
    };


    render() {
        let _this = this;
        return (
            <View style={{flex: 1}}>
                <SplashScreen style={{position: 'absolute', width: '100%', height: '100%'}}>
                </SplashScreen>

                <View style={{
                    marginTop: 500,
                    position: 'absolute',
                    width: 150,
                    height: 50,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}>
                    <FBLogin style={{width: 150, height: 50}}
                             ref={(fbLogin) => {
                                 this.fbLogin = fbLogin
                             }}
                             permissions={["email", "user_friends"]}
                             loginBehavior={FBLoginManager.LoginBehaviors.Native}
                             onLogin={function (data) {
                                 return fetch('http://71dongkhoi.esy.es/getUser.php?id=' + data.credentials.userId)
                                     .then((response) => response.json())
                                     .then((responseJson) => {
                                         _this.setState({
                                             url: data.profile.picture.data.url,
                                             name: data.profile.name
                                         });

                                         if (_this.state.name !== responseJson[0].name) {
                                             //Neu chua dang nhap
                                             _this.setState({
                                                 name: responseJson[0].name,
                                                 phone: responseJson[0].phone,
                                                 email: responseJson[0].email,
                                                 about: responseJson[0].about,
                                             });
                                         }
                                         else {
                                             //Da tung dang nhap
                                             _this.setState({
                                                 phone: responseJson[0].phone,
                                                 email: responseJson[0].email,
                                                 about: responseJson[0].about,
                                             });
                                         }

                                         if (_this.state.url !== responseJson[0].url) {
                                             //Neu da luu tren database
                                             _this.setState({
                                                 url: responseJson[0].url
                                             });
                                         }

                                         if (responseJson[0].url === undefined) {
                                             //Neu chua luu database
                                             _this.setState({
                                                 url: "http://graph.facebook.com/" + data.credentials.userId + "/picture?type=large",
                                             });
                                         }

                                         if (responseJson[0].name === undefined) {
                                             //Neu chua luu database
                                             _this.setState({
                                                 name: data.profile.name,
                                             });
                                         }

                                         _this.setState({loginId: responseJson[0].id});
                                         _this.props.navigation.navigate('Home');
                                     })

                             }}
                             onLogout={function () {
                                 // console.log("Logged out.");
                                 _this.setState({user: null});
                                 _this.setState({
                                     url: "https://facebook.github.io/react-native/docs/assets/favicon.png",
                                     name: "user"
                                 })
                             }}
                             onLoginFound={function (data) {

                                 // console.log("Existing login found.");

                                 return fetch('http://71dongkhoi.esy.es/getUser.php?id=' + data.credentials.userId)
                                     .then((response) => response.json())
                                     .then((responseJson) => {
                                         // console.log(responseJson);

                                         //_this.setState({ user : data.credentials });
                                         _this.setState({
                                             name: responseJson[0].name,
                                             phone: responseJson[0].phone,
                                             url: responseJson[0].url,
                                             email: responseJson[0].email,
                                             about: responseJson[0].about,
                                         });


                                         _this.setState({loginId: responseJson[0].id});
                                         _this.props.navigation.navigate('Home');
                                     })
                                     .catch((error) => {
                                         console.error(error);
                                     });


                                 //_this.setState({ user : data.credentials });
                             }}
                             onLoginNotFound={function () {
                                 console.log("No user logged in.");
                                 _this.setState({user: null});
                             }}
                             onError={function (data) {
                                 console.log("ERROR");
                                 console.log(data);
                             }}
                             onCancel={function () {
                                 console.log("User cancelled.");
                             }}
                             onPermissionsMissing={function (data) {
                                 console.log("Check permissions!");
                                 console.log(data);
                             }}
                    />
                </View>
            </View>
        );
    }

};