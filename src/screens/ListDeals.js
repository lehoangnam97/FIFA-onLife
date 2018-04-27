import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import containers from '../styles/container'
import DealsListView from "../components/DealsListView/DealsListView";
import CustomModal from "../components/CustomModal";
import TeamRequestsListView from "../components/TeamRequestsListView/TeamRequestListView";
import FilterSlidingUp from "../components/FilterSlidingUp";
import DealSlidingUp from "../components/DealSlidingUp";

export default class ListDeals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [
                {
                    name: "Le Hoang Nam",
                    id: "100000184977388"
                },
                {
                    name: "Phuc Ong dia",
                    id: "100004147054885"
                },
                {
                    name:"Ngo Minh Kien",
                    id:"100009861790572"
                }
            ]
        };

    }


    render() {
        return (
            <View style={{flex:1}}>
                 <DealSlidingUp/>
            </View>
        )
    }
}

