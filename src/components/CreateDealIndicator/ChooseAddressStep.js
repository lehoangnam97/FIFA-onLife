import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Icon} from 'react-native-elements'
import {whiteText} from "../../styles/text";
import {defaultRegion, mapStyle} from "../../config/map";
import map from '../../styles/map'
import {width, height} from 'react-native-dimension';
import * as axios from "axios/index";
import PropTypes from 'prop-types'


const propTypes = ({
    style: PropTypes.any,
    onAddressChange: PropTypes.func,
    onLatitudeChange: PropTypes.func,
    onLongitudeChange: PropTypes.func,
});

const defaultProps = {
    style: {},
    onAddressChange() {
    },
    onLatitudeChange() {
    },
    onLongitudeChange() {
    },
};


export default class ChooseAddressStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMarkerAddress: "",
            loginCoordinate: {
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
        this.onPressMapView = this.onPressMapView.bind(this);
        this.onPressLoginLocationButton = this.onPressLoginLocationButton.bind(this);

    }

    onPressMapView(event) {
        const {onAddressChange,onLatitudeChange,onLongitudeChange} = this.props;
        let coordinate = event.nativeEvent.coordinate;
        this.setState({loginCoordinate: coordinate});
        onLatitudeChange(coordinate.latitude);
        onLongitudeChange(coordinate.longitude);
        onAddressChange(coordinate);
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + coordinate.latitude + ',' + coordinate.longitude + '&key=AIzaSyC-H415RwIwooot2IeOqn9SsX1jEof8QxA')
            .then(response => {
                let address = response.data.results[0].formatted_address.toString().split(/,/);
                this.setState({currentMarkerAddress: (address[0] + "," + address[1] + "," + address[2])});
            }).catch((error) => {
        });
    }

    onPressLoginLocationButton(){
        this.mapRef.animateToCoordinate(this.state.loginCoordinate);
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => this.mapRef = ref} provider={PROVIDER_GOOGLE}
                    style={styles.map} customMapStyle={mapStyle}
                    loadingEnabled={true} initialRegion={this.state.mapRegion}
                    onPress={this.onPressMapView}
                    onRegionChangeComplete={region => {
                        if (region.latitudeDelta > defaultRegion.latitudeDelta * 0.3) {
                            this.setState({mapRegion: region});
                        }
                    }}>
                    <Marker anchor={{x: 0.5, y: 0.5}} coordinate={this.state.loginCoordinate}/>
                </MapView>

                <View style={styles.currentAddressTextContainer}>
                    <Text style={styles.currentAddressText}>{this.state.currentMarkerAddress}</Text>
                </View>

                <TouchableOpacity style={styles.loginLocationButton}
                                  onPress={this.onPressLoginLocationButton}>
                    <Icon name="my-location" size={20} color="#16a085"/>
                </TouchableOpacity>
            </View>
        );
    }
}

ChooseAddressStep.propTypes = propTypes;
ChooseAddressStep.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: StyleSheet.flatten(map.container),
    map: StyleSheet.flatten(map.content),

    loginLocationButton: {
        position: 'absolute',
        marginTop: height(20),
        marginLeft: 10,
        width: 40, aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center', elevation: 5,
    },
    currentAddressTextContainer: {
        position: 'absolute',
        marginTop: 20,
        width: '90%', height: 50,
        alignSelf: 'center', justifyContent: 'center',
        backgroundColor: 'white', borderRadius: 5,
    },
    currentAddressText: {
        alignSelf: 'stretch',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#16a085'
    },
});