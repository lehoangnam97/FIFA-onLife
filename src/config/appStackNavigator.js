import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../screens/Login';
import Main from '../screens/Main'


export const AppStackNavigator = StackNavigator({
    Login: {screen: Login, navigationOptions: {header: null}},
    Main: {screen: Main, navigationOptions: {header: null}}
});