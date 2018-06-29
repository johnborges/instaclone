import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostActions extends Component {

  constructor(props){
    super(props);

    this.state = {
      heartFilled: false
    }
  }

  _onHeartTap() {
    this.setState((prevState, props) => ({
      heartFilled: !prevState.heartFilled
    }));
  }

  render() {

    let likeBtn = this.state.heartFilled ? 
      <Icon style={styles.icon} name={'ios-heart'} size={24} color="red"/> : 
      <Icon style={styles.icon} name={'ios-heart-outline'} size={24}/>;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._onHeartTap.bind(this)}>{likeBtn}</TouchableWithoutFeedback>
        <Icon style={styles.icon} name={'ios-chatbubbles-outline'} size={25}/>
        <Icon style={styles.icon} name={'ios-share-alt-outline'} size={25}/>
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