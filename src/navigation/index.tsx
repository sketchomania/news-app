import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SCREENS} from '../constants/screens';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = 'home';
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? 'home' : 'home-outline';
        break;
      case SCREENS.DETAIL:
        iconName = focused ? 'information-circle' : 'information';
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? 'notifications' : 'notifications-outline';
        break;
      case SCREENS.SEARCH:
        iconName = focused ? 'search' : 'search-outline';
        break;
      case SCREENS.PROFILE:
        iconName = focused ? 'person' : 'person-outline';
        break;
      default:
        iconName = focused ? 'home' : 'home-outline';
        break;
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: 'coral',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen name={SCREENS.DETAIL} component={DetailScreen} />
        <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
