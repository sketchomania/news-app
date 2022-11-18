import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SCREENS} from '../constants/screens';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import HealthScreen from '../screens/health/HealthScreen';
import BusinessScreen from '../screens/business/BusinessScreen';
import {COLORS} from '../constants/color';

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
      case SCREENS.BUSINESS:
        iconName = focused ? 'business' : 'business-outline';
        break;
      case SCREENS.TECH:
        iconName = focused ? 'hardware-chip-sharp' : 'hardware-chip-outline';
        break;
      case SCREENS.SEARCH:
        iconName = focused ? 'search' : 'search-outline';
        break;
      case SCREENS.HEALTH:
        iconName = focused ? 'fitness' : 'fitness-outline';
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
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: COLORS.appColor,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: {
            backgroundColor: COLORS.white,
          },
        })}>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen name={SCREENS.HEALTH} component={HealthScreen} />
        <Tab.Screen name={SCREENS.TECH} component={NotificationScreen} />
        <Tab.Screen name={SCREENS.BUSINESS} component={BusinessScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
