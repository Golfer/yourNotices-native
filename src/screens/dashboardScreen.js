import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import HeaderBlock from './../components/shared/header';

class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock/>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

export default DashboardScreen