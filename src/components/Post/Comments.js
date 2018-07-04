import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Comment from './Comment';

const comments = [
  {
    id: 1,
    author: 'user_123',
    content: 'Great pic!'
  },
  {
    id: 2,
    author: 'hullman',
    content: 'another great commet'
  },
  {
    id: 3,
    author: 'alexis_bred',
    content: 'Looking back on the year'
  },
  {
    id: 4,
    author: 'user_999',
    content: 'Awesome'
  },
];

export default class Comments extends Component {

  constructor(props) {
    super(props);
  }

  _viewAllComments() {
    // navigate to full comments screen
  }

  render() {
    let viewAll;
    let commentList = comments.slice(0,3).map( (comment) => {
      return (
        <Comment key={comment.id} author={comment.author} content={comment.content} />
      );
    });

    let commentsCount = comments.length;
    if(commentsCount > 3){
      // change to Touchable Text for better styling options
      viewAll =  <Text style={{color: 'grey'}}>View all comments</Text>;
    }

    return (
      <View style={styles.container}>
        {commentList}
        {viewAll}
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