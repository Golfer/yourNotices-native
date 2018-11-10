import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from 'react-navigation';

import DashboardScreen from "../screens/dashboardScreen";
import PositiveScreen from "../screens/positiveListScreen";
import NegativeScreen from "../screens/negativeListScreen";

export default createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Positive: PositiveScreen,
    Negative: NegativeScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'Dashboard':
            return <Icon name="home" size={30} color="#A9A9A9" />
          case 'Positive':
            return <Icon name="plus-circle" size={30} color="#228B22" />
          case 'Negative':
            return <Icon name="minus-circle" size={30} color="#B22222" />
        }
      //   return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#8b0000',
      inactiveTintColor: '#000',
    },
  }
);
