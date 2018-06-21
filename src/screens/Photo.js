import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Photo extends Component {

  static navigationOptions = {
    title: 'Photo',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Photo!</Text>
      </View>
    )
  }
}