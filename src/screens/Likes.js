import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Likes extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Likes</Text>
      </View>
    )
  }
}