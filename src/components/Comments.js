import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const comments = [
  {
    author: 'user_123',
    content: 'Great pic!'
  },
  {
    author: 'hullman',
    content: 'another great commet'
  },
  {
    author: 'alexis_bred',
    content: 'Looking back on the year'
  },
  {
    author: 'user_999',
    content: 'Awesome'
  },
];

export default class Comments extends Component {

  render() {
    let commentList = comments.map( (comment) => {
      return (
        <View style={styles.commentContainer}>
          <Text style={styles.author}>{comment.author}</Text>
          <Text>{comment.content}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        {commentList}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10 
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  author: {
    fontWeight: 'bold',
    marginRight: 5
  }
});