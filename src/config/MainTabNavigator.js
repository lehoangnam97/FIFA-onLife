import React from 'react';
import {TabNavigator} from 'react-navigation';
import DealsMap from '../screens/DealsMap'
import Home from "../screens/Home";
import ProfileSettings from "../screens/ProfileSettings"
import Profile from '../screens/Profile'
import {NavigationComponent} from 'react-native-material-bottom-navigation'
import {Icon} from "react-native-elements";

export const tabNavigatorHeight=50;

export const MainTabNavigator = TabNavigator(
    {
        Profile: {screen: Profile, navigationOptions: {header: null}},
        Home: {screen: Home, navigationOptions: {header: null}},
        DealsMap: {screen: DealsMap, navigationOptions: {header: null}},

        ProfileSettings: {screen: ProfileSettings, navigationOptions: {header: null}},
    },
    {
        tabBarComponent: NavigationComponent,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            bottomNavigationOptions: {
                innerStyle: {
                    elevation: 10,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderWidth: 0.2,
                    borderColor: "#95a5a6",
                    height:tabNavigatorHeight
                },
                labelColor: '#2c3e50',
                activeLabelColor: '#27ae60',
                backgroundColor: 'white',
                rippleColor: 'black',
                shifting: false,
                tabs: {
                    Home: {
                        label: "Trang chủ",
                        icon: (<Icon size={24} name="home" color="#2c3e50"/>),
                        activeIcon: (<Icon size={24} name="home" color="#27ae60"/>)
                    },
                    DealsMap: {
                        label: "Bản đồ",
                        icon: (<Icon size={24} name="map" color="#2c3e50"/>),
                        activeIcon: (<Icon size={24} name="map" color="#27ae60"/>)
                    },
                    Profile: {
                        label: "Trang cá nhân",
                        icon: (<Icon size={24} name="account-circle" color="#2c3e50"/>),
                        activeIcon: (<Icon size={24} name="account-circle" color="#27ae60"/>)
                    },
                    ProfileSettings: {
                        label: "Chỉnh sửa",
                        icon: (<Icon size={24} name="settings" color="#2c3e50"/>),
                        activeIcon: (<Icon size={24} name="settings" color="#27ae60"/>)
                    },

                }
            }
        }
    }
);

