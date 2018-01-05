/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View, ActivityIndicator,
  FlatList
} from 'react-native';
import ComingSoonMovieModel from './ComingSoonMovieModel';

export default class ComingSoonListing extends Component<{}> {

    state = {
      loading: false,
      data: [],
      error: null,
    };

    makeRequest() {
      const url = "https://data-in.bookmyshow.com/?cmd=COMINGSOON&rc=MUMBAI&t=67x1xa33b4x422b361ba&pg=1&cnt=1000&yy=2018&mm=01&lng=&gnr=&f=json&ch=mobile";
      fetch(url)
        .then(res => res.json())
        .then(res => {
        //  console.log("makeRequest",res.BookMyShow.Events);
      this.setState({
        loading: false,
        data: res.BookMyShow.Events,
        error: res.error || null
      })
      console.log("makeRequest12",this.state);
    }
  )
    .catch(error => {
      this.setState({ loading: false, error: error });
    });
    }
componentWillMount() {
  this.makeRequest();
  //console.log("componentWillMount",this.state);
}

 _keyExtractor = (item, index) => index;

renderEvents() {
  //debugger;
  if(!this.state.loading) {
    if(typeof this.state.data !== 'undefined' && this.state.data.length > 0 ) {
      //debugger;
      return (
        <FlatList style={styles.listStyle}
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={({item}, index) => (
            <ComingSoonMovieModel key={index} data={item} />
          )}>
        </FlatList>
      );
    } else {
    //  console.log("renderEvents22",this.state.data)
    }
  } else {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
}
  render() {
    return (
      <View>
      {this.renderEvents()}
      </View>
    );
  }
}

const styles = {
  listStyle: {
    backgroundColor: '#E9EAED'
  }
};
