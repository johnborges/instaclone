import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, ActionSheetIOS } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Todo: Support long press open model profile summary
 */
class PostHeader extends Component {

  constructor(props) {
    super(props);
  }

  _onHeaderTap() {
    this.props.navigation.navigate('Profile');
  }

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
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Profile')}}>
            <Image 
              source={{
                uri: 'https://fakeimg.pl/50x50/'
              }}
              style={styles.thumbnail}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={ () => {this.props.navigation.navigate('Profile')} }>
            <View><Text>profile_name</Text></View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={this._onMoreButtonTap.bind(this)}>
          <Icon name={'ios-more'} size={25} />
        </TouchableWithoutFeedback>
      </View>
    )
  }

}

export default withNavigation(PostHeader);

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