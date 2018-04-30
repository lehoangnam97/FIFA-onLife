import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../screens/Login';
import DealsMap from '../screens/DealsMap'
import Home from "../screens/Home";
import ProfileSettings from "../screens/ProfileSettings"


export const AppStackNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {header: null}
    },
    Home: {
        screen: Home,
        navigationOptions: {header: null}
    },

    ProfileSettings: {
        screen: ProfileSettings,
        navigationOptions: {header: null}
    },

    DealsMap: {
        screen: DealsMap,
        navigationOptions: {header: null}
    },




});