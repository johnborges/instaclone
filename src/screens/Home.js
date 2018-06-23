import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Post from '../components/Post';

export class Home extends Component {

  static navigationOptions = {
    title: 'Instaclone',
  };

  render() {
    return (
      <View>
        <Post />
      </View>
    )
  }
}