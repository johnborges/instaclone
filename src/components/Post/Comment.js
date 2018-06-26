import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class Comment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text>{this.props.content}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5
  },
  author: {
    fontWeight: 'bold',
    marginRight: 5
  }
});