import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Post from '../components/Post';

export class Home extends Component {

  static navigationOptions = {
    title: 'Instaclone',
  };

  render() {
    return (
      <ScrollView>
        <Post />
      </ScrollView>
    )
  }
}