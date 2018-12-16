import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
class WrongEndPoint extends Component {
  render(){
    return(
      <View>
        <Text h3>404! Something wrong </Text>
      </View>
    );

  }
}

export default WrongEndPoint;