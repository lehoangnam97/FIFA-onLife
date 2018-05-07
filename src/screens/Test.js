import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import RelatedDealsListView from "../components/RelatedDealsListView/RelatedDealsListView";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedDeals: [
                {
                    name: "FC Barcelona",
                    nameRq: "FC Manchester United",
                    url: "https://www.porcopedia.com/images/Simbolo_Barcelona_Sporting.jpg",
                    urlRq: "https://i.pinimg.com/originals/bd/6e/92/bd6e92733a2c73ef37271d34f824352f.jpg",
                    date:"12/4/2018",
                    time1:"09:30",
                    time2:"10:30",
                    latitude:10.8105831,
                    longitude:106.7091422
                },

            ]
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#3498db'}}>
                <RelatedDealsListView deals={this.state.relatedDeals}  onPress={()=>{alert("123")}}/>
            </View>
        );
    }

}