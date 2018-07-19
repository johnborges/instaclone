import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import Post from '../components/Post/Post';

// const posts = [
//   {
//     id: 1
//   },
//   {
//     id: 2
//   },
//   {
//     id: 3
//   }
// ];

export class Feed extends Component {

  static navigationOptions = {
    title: 'Instaclone',
  };

  render() {

    const ListView = ({ events }) => (
      <div>
        <h3>All events</h3>
        <ul>
          {events.map(event => <li key={event.id}>{event.name} ({event.id})</li>)}
        </ul>
      </div>
    );

    const GetFeed = `query GetPost {
      listPosts(first:5) {
        items {
          post_id
          author
          author_pic
          caption
          likes
          pic_url
          timestamp
        }
        nextToken
      }
    }`;

    return (
      // <FlatList
      //   data={posts}
      //   renderItem={ ({item}) => <Post />}
      //   keyExtractor={(item, index) => index.toString()}
      // />
      <Connect query={graphqlOperation(ListEvents)}>
        {({ data: { listEvents } }) => (
          <ListView events={listEvents.items} />
        )}
      </Connect>        
    )
  }
}