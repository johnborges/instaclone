import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostActions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name={'ios-heart-outline'} size={24}/>
        <Icon style={styles.icon} name={'ios-chatbubbles-outline'} size={25}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 10
  },
  icon: {
    marginRight: 10
  }
});