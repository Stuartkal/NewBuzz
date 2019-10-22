/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {Component,Fragment} from 'react';
import TabBar from './src/components/Routes/TabBar';
import Header from './src/components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <TabBar/>
     </Fragment>
    );
  }
}