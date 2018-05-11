import {StyleSheet} from 'react-native'

export default CONTAINER = StyleSheet.create({
    wrap:{
        flex:1,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#16a085'
    },
    headerLeftButton:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    headerRightButton:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
});