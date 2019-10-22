/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,Text,Image, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';


export default class TechnologyHeadlines extends Component{
    render(){
        console.log(this.props.article);
        return (
                
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => Linking.openURL(this.props.article.url.toString()) }>
                        <Text style={styles.articleTitle}>
                            {this.props.article.title}
                        </Text>
                        <Text style={styles.articledescription}>
                            {this.props.article.description}
                        </Text>
                        <Image source={{uri: this.props.article.urlToImage}} style={styles.image}/>
                        </TouchableOpacity>
                        <View style={styles.separator}/>
                        <Text style={styles.cardFooter}>
                            Author: 
                            {this.props.article.author}
                        </Text>
                        <Text style={styles.cardFooter}>
                            Date : 
                            {this.props.article.publishedAt}
                        </Text>
                    </View>
                                
        );
    }
}
