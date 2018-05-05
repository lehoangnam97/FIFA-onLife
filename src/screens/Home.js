import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import DealsListView from '../components/DealsListView/DealsListView'
import globalStore from '../config/globalStore';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId:globalStore.getStateOf('Login').loginId,
            deals: [],
            dealsFilter: [],
        };
        this.loadData();
    }

    loadData = async () => {
        return await fetch('http://71dongkhoi.esy.es/getDeal.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({deals: responseJson, dealsFilter: responseJson});
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    onMakeDealPress(section) {
        const id ="";
        const idTeam = section.id;
        fetch('http://71dongkhoi.esy.es/submit_dealRequest.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: idTeam,
                userId: id,
            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("")
            }).catch((error) => {
            console.error(error);
        });

    }

    render() {

        return (

            <View style={{flex: 1}}>
                <DealsListView deals={this.state.deals} onMakeDealPress={(section) => {
                    this.onMakeDealPress(section)
                }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    nameInput: {
        width: '100%',
        height: 150,
        backgroundColor: 'white'
    }
});

