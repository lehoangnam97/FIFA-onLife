import React from 'react';
import {TabNavigator} from 'react-navigation';
import DealsMap from '../screens/DealsMap'
import Home from "../screens/Home";
import ProfileSettings from "../screens/ProfileSettings"
import Profile from '../screens/Profile'
import {NavigationComponent} from 'react-native-material-bottom-navigation'

export const MainTabNavigator = TabNavigator(
    {
        Home: {screen: Home, navigationOptions: {header: null}},
        DealsMap: {screen: DealsMap, navigationOptions: {header: null}},
        Profile: {screen: Profile, navigationOptions: {header: null}},
        ProfileSettings: {screen: ProfileSettings, navigationOptions: {header: null}},
    },
    {
        tabBarComponent: NavigationComponent,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            bottomNavigationOptions: {
                labelColor: 'white',
                backgroundColor: 'red',
                rippleColor: 'white',
                tabs: {
                    Login: {
                        barBackgroundColor: '#37474F',
                        labelColor: 'black'
                    },
                    Home: {
                        barBackgroundColor: '#37474F',
                        labelColor: 'black'
                    },
                    ProfileSettings: {
                        barBackgroundColor: '#37474F',
                        labelColor: 'black'
                    },
                    Profile: {
                        barBackgroundColor: '#37474F',
                        labelColor: 'black'
                    }

                }
            }
        }
    }
);