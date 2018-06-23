import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PostActions from './PostActions';

export default class PostBody extends Component {

  render() {
    return (
      <View style={styles.container}>
        <PostActions />
        <Text style={styles.likeCount}>
          <Icon style={styles.heart} name={'ios-heart'} size={10}/>
          34,384 likes
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  heart: {
    marginRight: 5
  },
  likeCount: {
    marginTop: 10,
  }
});