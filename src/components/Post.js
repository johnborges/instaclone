import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import PostHeader from './PostHeader';
import PostBody from './PostBody';

export default class Post extends Component {

  render() {
    return (
      <View>
        <PostHeader />
        <Image 
          source={{
            uri: 'https://fakeimg.pl/50x50/'
          }}
          style={styles.pic}
        />
        <PostBody />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  pic: {
    width: 350,
    height: 200,
  }
});