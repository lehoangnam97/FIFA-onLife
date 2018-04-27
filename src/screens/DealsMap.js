import React, {Component} from 'react'
import {
    View, Text, StyleSheet, Platform, PermissionsAndroid
} from 'react-native'
import MapView, {AnimatedRegion, Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import DealMarker from '../components/DealMarker'
import * as axios from 'axios';
import map from "../styles/map";
import {mapStyle, defaultRegion} from '../config/map.js'
import FilterSlidingUp from "../components/FilterSlidingUp";
import DealSlidingUp from "../components/DealSlidingUp";

export default class DealsMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deals: [],
            dealsFilter: [],
            currentDeal: {url: "", name: "", type: "", age: "", position: "", time1: "", time2: ""},
            myCoordinate: {
                latitude: defaultRegion.latitude,
                longitude: defaultRegion.longitude,
            },
            mapRegion: {
                latitude: defaultRegion.latitude,
                longitude: defaultRegion.longitude,
                latitudeDelta: defaultRegion.latitudeDelta,
                longitudeDelta: defaultRegion.longitudeDelta,
            },
        };
        this.loadData();
    }

    loadData = async () => {
        return await fetch('http://71dongkhoi.esy.es/getDeal.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({deals: responseJson});
                this.setState({deals: responseJson, dealsFilter: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    };


    renderDeals() {
        return this.state.dealsFilter.map(deal => {
            return (
                <DealMarker
                    key={deal.id}
                    deal={deal}
                    onPressed={() => {
                        this.setState({currentUser: deal});
                        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + deal.latitude + ',' + deal.longitude + '&key=AIzaSyC-H415RwIwooot2IeOqn9SsX1jEof8QxA')
                            .then(response => {
                                let address = response.data.results[0].formatted_address.toString().split(/,/);
                                this.setState({place: (address[0] + "," + address[1] + "," + address[2])});
                            }).catch((error) => {
                        });
                    }}/>
            )
        })
    };


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => this.mapRef = ref}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    customMapStyle={mapStyle}
                    loadingEnabled={true}
                    initialRegion={this.state.mapRegion}
                    onRegionChangeComplete={region => {
                        if (region.latitudeDelta > defaultRegion.latitudeDelta * 0.3) {
                            this.setState({mapRegion: region});
                        }
                    }}>
                    {this.renderDeals()}
                    <Marker
                        anchor={{x: 0.5, y: 0.5}}
                        coordinate={this.state.myCoordinate}>
                        <View style={styles.myMarkerContainer}>
                            <View style={styles.myMarker}/>
                        </View>
                    </Marker>
                </MapView>
                <DealSlidingUp deal={this.state.currentDeal}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: StyleSheet.flatten(map.container),
    map: StyleSheet.flatten(map.content),
    myMarkerContainer: {
        aspectRatio: 1,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'rgba(0,122,255,0.4)',
        backgroundColor: 'rgba(0,122,255,0.2)',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    myMarker: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'white',
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    }

});

