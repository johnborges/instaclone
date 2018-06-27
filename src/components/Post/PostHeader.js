import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostHeader extends Component {

  _onMoreButtonTap() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [
        'Cancel', 
        'Share to Facebook', 
        'Copy Link', 
        'Turn Off Push Notifications',
        'Report', // destructive
        'Mute', // destructive
        'Unfollow' // destructive
      ],
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex === 1) { /* destructive action */ }
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image 
            source={{
              uri: 'https://fakeimg.pl/50x50/'
            }}
            style={styles.thumbnail}
          />
          <Text>profile_name</Text>
        </View>
        <TouchableWithoutFeedback onPress={this._onMoreButtonTap}>
          <Icon name={'ios-more'} size={25} />
        </TouchableWithoutFeedback>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  thumbnail: {
    marginRight: 10,
    width: 32,
    height: 32,
    borderRadius: 32/2,
  }

});