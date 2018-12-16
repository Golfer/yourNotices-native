import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from 'react-navigation'

import DashboardScreen from "../screens/dashboardScreen"
import PositiveScreen from "../screens/positiveListScreen"
import NegativeScreen from "../screens/negativeListScreen"
import DetailScreen from "../screens/detailScreen"

const Navigation = new createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    },
    Positive: {
      screen: PositiveScreen
    },
    Negative: {
      screen: NegativeScreen
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'Dashboard':
            return <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={30} color="#4F8EF7" />
          case 'Positive':
            return <MaterialCommunityIcons name={focused ? 'shield-plus' : 'shield-plus-outline'} size={30} color="#4F8EF7" />
          case 'Negative':
            return <MaterialCommunityIcons name={focused ? 'bookmark-minus' : 'bookmark-minus-outline'} size={30} color="#4F8EF7" />
          case 'Detail':
            return <MaterialCommunityIcons name={focused ? 'settings' : 'settings-box'} size={30} color="#4F8EF7" />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#8b0000',
      inactiveTintColor: '#000',
    },
  }
);

export default Navigation