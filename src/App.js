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
        let iconName, size;
        if (routeName === 'Home') {
          iconName = 'home';
          size = 30;
        } 
        else if (routeName === 'Search') {
          iconName = 'search';
          size = 30;
        }
        else if (routeName === 'Photo') {
          iconName = 'add-circle-outline';
          size = 40;
        }
        else if (routeName === 'Likes') {
          iconName = 'heart';
          size = 30;
        }
        else if (routeName === 'UserProfile') {
          iconName = 'person';
          size = 30;
        }
        return <Icon name={`ios-${iconName}`} size={size} color={tintColor} />;
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
