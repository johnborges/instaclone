import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import PostHeader from './PostHeader';
import PostBody from './PostBody';
import Comments from './Comments';

export default class Post extends Component {

  render() {
    return (
      <View style={styles.container}>
        <PostHeader />
        <Image 
          source={{
            uri: 'https://fakeimg.pl/50x50/'
          }}
          style={styles.pic}
        />
        <PostBody />
        <Comments />
        <Text style={styles.timestamp}>21 hours ago</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  pic: {
    width: 400,
    height: 200,
  },
  timestamp: {
    color: 'grey',
    fontSize: 10,
    marginLeft: 10
  }
});