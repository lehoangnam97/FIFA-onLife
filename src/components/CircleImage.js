import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet} from 'react-native'

const propTypes = ({
    style: PropTypes.any,
    resizeMode: PropTypes.oneOf(["cover", "contain", "stretch", "repeat", "center"]),
    source: PropTypes.any
});

const defaultProps = {
    resizeMode: "stretch",
    source: {uri: "https://png.icons8.com/color/1600/cristiano-ronaldo.png"}
};

export default class CircleImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {source,resizeMode} = this.props;
        return (
            <View style={[styles.container, this.props.style]}>
                <Image source={source} style={[styles.image, this.props.style]} resizeMode={resizeMode}/>
            </View>
        );
    }
}

CircleImage.propTypes = propTypes;
CircleImage.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        width:150,
        height:150,
        backgroundColor: 'transparent',
        borderRadius: 100
    },
    image:{
        width:'100%',
        aspectRatio:1,
        backgroundColor:'transparent',
        borderRadius:100
    }
});