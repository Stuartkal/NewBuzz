/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,Text} from 'react-native';

import styles from './styles';

export default class Header extends Component{
    render(){
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.logo}>NewzBuzz</Text>   
            </View>
        );
    }
}
