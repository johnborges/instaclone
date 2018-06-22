import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Home extends Component {

  static navigationOptions = {
    title: 'Instaclone',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}