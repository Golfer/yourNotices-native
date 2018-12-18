import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import HeaderBlock from './../components/shared/header';
import FeatherIcon from 'react-native-vector-icons/Feather';


class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock navigation={this.props.navigation}/>

        <Button
          icon={
            <FeatherIcon
              name='user-check'
              size={30}
              color='#fff'
            />
          }
          title="Positive aspect"
          titleStyle={{ fontWeight: "900" }}
          buttonStyle = {styles.buttonPositive}
          onPress={() => this.props.navigation.navigate('Positive')}
        />
        <Button
          icon={
            <FeatherIcon
              name='user-x'
              size={30}
              color='#fff'
            />
          }
          title="Negative aspect"
          titleStyle={{ fontWeight: "900" }}
          buttonStyle = {styles.buttonNegative}
          onPress={() => this.props.navigation.navigate('Negative')}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonPositive: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 0,
    borderRadius: 5,
    height: 250,
    backgroundColor: "green",
  },
  buttonNegative: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0,
    borderRadius: 5,
    height: 250,
    backgroundColor: 'red',
  }
})

export default DashboardScreen
