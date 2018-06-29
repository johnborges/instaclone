import React, { Component } from 'react';
import { 
  createBottomTabNavigator,
  createStackNavigator  
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feed } from './screens/Feed';
import { Search } from './screens/Search';
import { Photo } from './screens/Photo';
import { Likes } from './screens/Likes';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';

// need to add all other possible routes from each tab stack
const FeedStack = createStackNavigator(
  {
    Feed: Feed,
    Profile: Profile
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Settings: Settings  
  }
);

const TabNav = createBottomTabNavigator(
  {
    Home: FeedStack,
    Search: Search,
    Photo: Photo,
    Likes: Likes,
    UserProfile: ProfileStack
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } 
        else if (routeName === 'Search') {
          iconName = 'search';
        }
        else if (routeName === 'Photo') {
          iconName = 'camera';
        }
        else if (routeName === 'Likes') {
          iconName = 'heart';
        }
        else if (routeName === 'UserProfile') {
          iconName = 'person';
        }
        return <Icon name={`ios-${iconName}`} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showLabel: false
    } 
  }
);

export default class App extends Component {
  render() {
    return (<TabNav />);
  }
}
