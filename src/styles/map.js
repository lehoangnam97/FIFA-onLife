import {StyleSheet} from 'react-native'


export default MAP_STYLES = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    content:{
        flex: 1,
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    }
});