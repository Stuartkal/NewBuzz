/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    card: {
        height:450,
        backgroundColor:'white',
        elevation:3,
        marginTop:10,
        marginBottom:2,
        padding:10,
    },
    articleTitle: {
        fontSize:20,
        fontWeight:'bold',
    },
    articledescription: {
        fontSize:16,
        fontWeight:'300',
        color:'rgba(0,0,0,0.5)',
    },
    cardFooter: {
        fontSize:15,
        fontWeight:'300',
        color:'rgba(0,0,0,0.5)',
    },
    image: {
        height:200,
        marginTop:10,
        marginBottom:20,
    },
    separator: {
        height:1,
        width:'95%',
        marginHorizontal:10,
        backgroundColor:'rgba(0,0,0,0.1)',
        marginBottom:10,
    },
});

export default styles;