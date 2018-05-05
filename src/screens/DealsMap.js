import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import DealMarker from '../components/DealMarker'
import * as axios from 'axios';
import map from "../styles/map";
import {mapStyle, defaultRegion} from '../config/map.js'
import FilterSlidingUp from "../components/FilterSlidingUp";
import DealSlidingUp from "../components/DealSlidingUp";
import ActionButton from 'react-native-action-button';
import {Icon as ElementsIcon} from 'react-native-elements';
import {width} from 'react-native-dimension';


export default class DealsMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dealSlidingVisible: false,
            filterSlidingVisible: false,
            deals: [],
            dealsFilter: [],
            currentMarkerAddress: "",
            currentDealSlidingInfo: {url: "", name: "", teamType: "",dealType:"", age: "", position: "", time1: "", time2: ""},
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
        this.onPressLoginLocationButton = this.onPressLoginLocationButton.bind(this);
        this.onPressActionFilter = this.onPressActionFilter.bind(this);
        this.onPressActionBackHome = this.onPressActionBackHome.bind(this);
        this.onPressActionCreateDeal = this.onPressActionCreateDeal.bind(this);
        this.loadData();
    }

    onPressLoginLocationButton() {
        this.mapRef.animateToCoordinate(this.state.loginCoordinate, 500);
    }

    onPressActionBackHome() {
    }

    onPressActionCreateDeal() {
    }

    onPressActionFilter() {
        this.setState({filterSlidingVisible: true, dealSlidingVisible: false});
    }


    onFilterChange(teamType, age, district) {
        let result = [];
        if (teamType !== 'Tất cả') {
            this.state.deals.map(deal => {
                if (deal.teamType === teamType || deal.teamType === 'Tất cả') result.push(deal);
            })
        }
        else result = this.state.deals.slice();

        let result2 = result.slice();
        if (age !== 'Tất cả') {
            result.map(deal => {
                if (deal.age !== age && deal.age !== 'Tất cả') result2.pop(deal);
            })
        }

        let result3 = result2.slice();
        if (district !== 'Tất cả') {
            result2.map(deal => {
                if (deal.district !== district && deal.district !== 'Tất cả') result3.pop(deal);
            })
        }
        this.setState({dealsFilter: result3})
    }

    onFilterSlidingRequestClose() {
        //this.setState({dealSlidingVisible: false});
    }

    onDealSlidingRequestClose() {
        // this.setState({slidingVisible: false});
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


    renderDealMarkers() {
        return this.state.dealsFilter.map(deal => {
            return (
                <DealMarker key={deal.id} deal={deal}
                            onPressed={() => {
                                this.setState({
                                    currentDealSlidingInfo: deal,
                                    dealSlidingVisible: true,
                                    filterSlidingVisible: false
                                });
                                axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + deal.latitude + ',' + deal.longitude + '&key=AIzaSyC-H415RwIwooot2IeOqn9SsX1jEof8QxA')
                                    .then(response => {
                                        let address = response.data.results[0].formatted_address.toString().split(/,/);
                                        this.setState({currentMarkerAddress: (address[0] + "," + address[1] + "," + address[2])});
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
                    ref={ref => this.mapRef = ref} provider={PROVIDER_GOOGLE}
                    style={styles.map} customMapStyle={mapStyle}
                    loadingEnabled={true} initialRegion={this.state.mapRegion}
                    onRegionChangeComplete={region => {
                        if (region.latitudeDelta > defaultRegion.latitudeDelta * 0.3) {
                            this.setState({mapRegion: region});
                        }
                    }}>
                    {this.renderDealMarkers()}
                    <Marker anchor={{x: 0.5, y: 0.5}} coordinate={this.state.loginCoordinate}>
                        <View style={styles.loginMarkerContainer}>
                            <View style={styles.loginMarker}/>
                        </View>
                    </Marker>
                </MapView>


                <FilterSlidingUp visible={this.state.filterSlidingVisible}
                                 onRequestClose={this.onFilterSlidingRequestClose}
                                 onFilterChange={(teamType, age, district) => {
                                     this.onFilterChange(type, age, district)
                                 }}/>


                <DealSlidingUp visible={this.state.dealSlidingVisible}
                               deal={this.state.currentDealSlidingInfo}
                               onRequestClose={this.onDealSlidingRequestClose}/>

                <View style={styles.currentAddressTextContainer}>
                    <Text style={styles.currentAddressText}>{this.state.currentMarkerAddress}</Text>
                </View>

                <View style={styles.actionButtonContainer}>
                    <TouchableOpacity style={styles.loginLocationButton}
                                      onPress={this.onPressLoginLocationButton}>
                        <ElementsIcon name="my-location" size={20} color="#16a085"/>
                    </TouchableOpacity>

                    <ActionButton
                        buttonColor="white" verticalOrientation={"down"} position={"left"}
                        size={width(12)} offsetX={0} offsetY={width(12) + 5} spacing={10}
                        renderIcon={active => active === false ?
                            (<ElementsIcon name="menu" size={20} color="#16a085"/>) :
                            (<ElementsIcon name="close" size={20} color="#16a085"/>)}>

                        <ActionButton.Item title="Về trang chủ" onPress={this.onPressActionBackHome}>
                            <ElementsIcon name="home" size={20} color="#4CAF50"/>
                        </ActionButton.Item>

                        <ActionButton.Item title="Lọc kèo" onPress={this.onPressActionFilter}>
                            <ElementsIcon name="filter-list" size={20} color="#4CAF50"/>
                        </ActionButton.Item>

                        <ActionButton.Item title="Tạo kèo" onPress={this.onPressActionCreateDeal}>
                            <ElementsIcon name="create" size={20} color="#4CAF50"/>
                        </ActionButton.Item>
                    </ActionButton>


                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: StyleSheet.flatten(map.container),
    map: StyleSheet.flatten(map.content),

    currentAddressTextContainer: {
        position: 'absolute',
        width: '90%', height: 50, marginTop: 10,
        alignSelf: 'center', justifyContent: 'center',
        backgroundColor: 'white', borderRadius: 5,
    },
    currentAddressText: {
        alignSelf: 'stretch',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#16a085'
    },
    loginMarkerContainer: {
        aspectRatio: 1,
        borderRadius: 100, borderWidth: 3, borderColor: 'rgba(0,122,255,0.4)',
        backgroundColor: 'rgba(0,122,255,0.2)', overflow: 'hidden',
        alignItems: 'center', justifyContent: 'center'
    },
    loginMarker: {
        height: 20, width: 20,
        borderRadius: 10, borderWidth: 3, borderColor: 'white',
        overflow: 'hidden', backgroundColor: '#007AFF'
    },
    actionButtonContainer: {
        position: 'absolute',
        marginTop: 80,
        marginLeft: 10,
        width: '12%',
        aspectRatio: 0.45,
    },
    loginLocationButton: {
        width: '100%', aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center', elevation: 5,
    }
});