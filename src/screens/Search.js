import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Search extends Component {

  static navigationOptions = {
    title: 'Search',
  };

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Coming Soon...</Text>
      </View>
    )

  }
}