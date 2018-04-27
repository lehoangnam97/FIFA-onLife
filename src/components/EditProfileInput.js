import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon as ElementsIcon} from 'react-native-elements';
import {View, Image, StyleSheet, TextInput} from 'react-native'

const propTypes = ({
    style: PropTypes.any,
    textInputStyle:PropTypes.any,
    placeholder:PropTypes.string,
    onChangeText: PropTypes.func,
    iconName:PropTypes.string,
    value:PropTypes.string,
});

const defaultProps = {
    value:"",
    placeholder:"",
    iconName:"",
    onChangeText() {
    }
};

export default class EditProfileInput extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(text) {
        const {onChangeText}=this.props;
        onChangeText(text);
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <ElementsIcon size={30} name={this.props.iconName} color="#7f8c8d"/>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.onChangeText}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='#bdc3c7'
                    style={[styles.textInput,this.props.textInputStyle]}
                />
            </View>
        );
    }
}

EditProfileInput.propTypes = propTypes;
EditProfileInput.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        width: '90%', borderBottomColor: 'grey', flexDirection: 'row'
    },
    textInput:{
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        marginLeft: 20,
        marginTop: 7,
        marginBottom: 7,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderColor: '#ecf0f1'
    }
});