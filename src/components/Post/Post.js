import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

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
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  pic: {
    width: 350,
    height: 200,
  }
});