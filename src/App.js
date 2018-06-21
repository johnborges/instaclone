import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Foundation';
import { Home } from './screens/Home';
import { Search } from './screens/Search';
import { Photo } from './screens/Photo';
import { Likes } from './screens/Likes';
import { Profile } from './screens/Profile';

const RootStack = createBottomTabNavigator(
  {
    Home: Home,
    Search: Search,
    Photo: Photo,
    Likes: Likes,
    Profile: Profile
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
        // else if (routeName === 'Settings') {
        //   iconName = `ios-options${focused ? '' : '-outline'}`;
        // }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
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
    return (<RootStack />);
  }
}
