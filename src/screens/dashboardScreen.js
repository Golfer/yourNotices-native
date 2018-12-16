import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import HeaderBlock from './../components/shared/header';
import Icon from 'react-native-vector-icons/FontAwesome';


class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock navigation={this.props.navigation}/>

        <Button
          onPress={() => this.props.navigation.navigate('Positive')}
          title="Go to Positive"
          style = {styles.buttonPositive}
        />
        <Button
          onPress={() => this.props.navigation.navigate('Negative')}
          title="Go to Negative"
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonPositive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  }
})

export default DashboardScreen
