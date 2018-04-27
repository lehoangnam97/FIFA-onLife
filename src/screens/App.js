import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';

class Store {
    constructor() {
        this.setStateCallbackMap = {}
    }

    setStateOf(componentName, state) {
        this.setStateCallbackMap[componentName] (state)
    }

    register(componentName, cb) {
        this.setStateCallbackMap[componentName] = cb
    }
}

const store = new Store();

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            content: "Default Content",
        };

        store.register('App', (s) => this.setState(s));
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        backgroundColor: '#16a085',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>{this.state.content}</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#16a085', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 400, height: 100}}>
                        <ChildComponent/>
                    </View>
                </View>
            </View>
        );
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "default text"
        }
    }

    onclick() {
        store.setStateOf('App', {content: this.state.text})
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => this.onclick()}
                    style={{flex: 1, backgroundColor: '#2c3e50', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>Press this to change parent state</Text>
                </TouchableOpacity>
                <TextInput style={{backgroundColor: 'white', width: '100%'}} onChangeText={(newText) => {
                    this.setState({text: newText})
                }}/>


            </View>
        )
    }
}


