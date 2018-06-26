import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PostActions from './PostActions';

export default class PostBody extends Component {

  render() {
    return (
      <View style={styles.container}>
        <PostActions />
        <View style={styles.likeCount}>
          <Icon style={styles.heart} name={'ios-heart'} size={10}/>
          <Text>34,384 likes</Text>
        </View>
        <Text numberOfLines={3}>
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10 
  },
  heart: {
    marginRight: 5
  },
  likeCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  }
});