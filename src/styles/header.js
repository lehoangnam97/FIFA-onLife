import {StyleSheet} from 'react-native'

export default header = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#16a085'
    },
    leftButton:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    rightButton:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
});