// import React, {Component} from 'react'
// import {View, Text, StyleSheet} from 'react-native'
// import text from '../styles/text'
// import containers from '../styles/container'
// import NameInput from "../components/NameInput";
// import CircleImage from "../components/CircleImage";
//
// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             refactor: "something"
//         };
//         this.onChangeText = this.onChangeText.bind(this)
//     }
//
//     onChangeText(text) {
//         this.setState({refactor:text});
//     }
//
//     render() {
//         return (
//             <View style={containers.wrap}>
//                 <Text style={text.title}>App đoán tên</Text>
//                 <Text>{this.state.refactor}</Text>
//                 <NameInput style={styles.nameInput} content="haha" onChangeText={this.onChangeText}/>
//                 <CircleImage style={{}}/>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     nameInput: {
//         width: '100%',
//         height: 150,
//         backgroundColor: 'white'
//     }
// });
//
