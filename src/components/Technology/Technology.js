/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {SafeAreaView,ScrollView} from 'react-native';
import axios from 'axios';

import TechnologyHeadlines from './TechnologyHeadlines';
import styles from './styles';

const url = 'https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=4e9dcc02e3bd457d84bf37542d374b42';

export default class Technology extends Component{

    constructor(props) {
        super(props);
        this.state = {
          articles: [],
        };
      }

      componentDidMount(){
        axios.get(url)
        .then(response => {
          console.log('articles',response);
          this.setState({
            articles: response.data.articles, 
          });
        }).catch(error => {
         console.log(error);
        });
     }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {
                        this.state.articles.map(article => {
                            return <TechnologyHeadlines article={article} key={article.id} />;
                        })
                    }          
                </ScrollView>
            </SafeAreaView>
        );
    }
}
