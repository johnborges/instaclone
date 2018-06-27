import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Post from '../components/Post/Post';

const posts = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
];

export class Feed extends Component {

  static navigationOptions = {
    title: 'Instaclone',
  };

  render() {
    return (
      <FlatList
        data={posts}
        renderItem={ ({item}) => <Post key={item.id} />}
      />
        
    )
  }
}