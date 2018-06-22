import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Settings extends Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Coming Soon...</Text>
      </View>
    )
  }
}