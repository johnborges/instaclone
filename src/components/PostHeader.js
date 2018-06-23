import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class PostHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{
            uri: 'https://fakeimg.pl/50x50/'
          }}
          style={styles.thumbnail}
        />
        <Text>profile_name</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  thumbnail: {
    marginRight: 10,
    width: 32,
    height: 32,
    borderRadius: 32/2,
  }

});