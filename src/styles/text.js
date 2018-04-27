import {StyleSheet} from 'react-native'


const titleSize = 20;
const subTitleSize = 18;
const dataSize = 16;

export const blackText = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: titleSize
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: subTitleSize
    },
    data: {
        color: '#34495e',
        fontSize: dataSize
    }
});
export const whiteText = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: titleSize
    },
    subTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: subTitleSize
    },
    data: {
        color: 'white',
        fontSize: dataSize
    }
});


export const greenText = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: '#16a085',
        fontSize: titleSize
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#16a085',
        fontSize: subTitleSize
    },
    data: {
        color: '#16a085',
        fontSize: dataSize
    }
});