import {StyleSheet} from 'react-native'
import {contentColor, contentColor2, mainColor, mainColor2 , subColor, subColor2} from "./color";

const crucialSize = 20;
const subSize = 18;
const contentSize = 16;




export const crucialText = StyleSheet.create({
    mainColor: {
        fontWeight: 'bold',
        color: mainColor,
        fontSize: crucialSize
    },
    mainColor2:{
        fontWeight: 'bold',
        color: mainColor2,
        fontSize: crucialSize
    },
    subColor:{
        fontWeight: 'bold',
        color: subColor,
        fontSize: crucialSize
    },

    subColor2:{
        fontWeight: 'bold',
        color: subColor2,
        fontSize: crucialSize
    },

    contentColor:{
        fontWeight: 'bold',
        color: contentColor,
        fontSize: crucialSize
    },
    content2Color:{
        fontWeight: 'bold',
        color: contentColor2,
        fontSize: crucialSize
    },

    blackColor: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: crucialSize
    },
    greyColor: {
        color: '#7f8c8d',
        fontSize: crucialSize
    },
    whiteColor:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: crucialSize
    }
});

export const subText=StyleSheet.create({
    mainColor: {
        fontWeight: 'bold',
        color: mainColor,
        fontSize: subSize
    },
    mainColor2:{
        fontWeight: 'bold',
        color:mainColor2,
        fontSize: subSize
    },
    subColor:{
        fontWeight: 'bold',
        color: subColor,
        fontSize: subSize
    },

    subColor2:{
        fontWeight: 'bold',
        color: subColor2,
        fontSize: subSize
    },

    contentColor:{
        fontWeight: 'bold',
        color: contentColor,
        fontSize: subSize
    },

    contentColor2:{
        fontWeight: 'bold',
        color: contentColor2,
        fontSize: subSize
    },


    blackColor: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: subSize
    },
    greyColor: {
        color: '#7f8c8d',
        fontSize: subSize
    },
    whiteColor:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: subSize
    }
});


export const contentText=StyleSheet.create({
    mainColor: {
        color: mainColor,
        fontSize: contentSize
    },
    mainColor2:{
        color: mainColor2,
        fontSize: contentSize
    },
    subColor:{
        color: subColor,
        fontSize: contentSize
    },

    subColor2:{
        color: subColor2,
        fontSize: contentSize
    },

    contentColor:{
        color: contentColor,
        fontSize: contentSize
    },

    contentColor2:{
        color: contentColor2,
        fontSize: contentSize
    },


    blackColor: {
        color: 'black',
        fontSize: contentSize
    },
    greyColor: {
        color: '#7f8c8d',
        fontSize: contentSize
    },
    whiteColor:{
        color: 'white',
        fontSize: contentSize
    }
});
