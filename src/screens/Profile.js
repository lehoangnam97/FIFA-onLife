import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import CreateDealIndicator from "../components/CreateDealIndicator/CreateDealIndicator";
import TeamsListView from "../components/TeamsListView/TeamsListView";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            deal:{}
        };
    }
    onDealChange(deal){
        this.setState({deal:deal})
        console.log(deal);
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamsListView/>
            </View>
        );
    }
}

const teams=[
{name:"team akh", captain:"asd"},{name:"team akh", captain:"asd"}
];


const styles = StyleSheet.create({
        container: { flex:1, backgroundColor:'red' },

    }
);