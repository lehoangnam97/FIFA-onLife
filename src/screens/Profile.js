import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                </View>
                <View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: { flex:1, backgroundColor:'red' },

    }
);