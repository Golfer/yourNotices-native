import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RootContainer extends Component {

  renderRow ({ item }) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.screenName}
      />
    )
  }


  render(){
    console.log(JSON.stringify(listPositive));
    return(
      <View>
        <Button
          icon={{
            name: 'arrow-right',
            size: 15,
            color: 'white'
          }}
          title='Positive section'
        />

        <Button
          icon={{
            name: 'arrow-right',
            size: 15,
            color: 'white'
          }}
          title='Negative section'
        />

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  positiveConteiner: {
    backgroundColor: 'blue',
  },
  negativeConteiner: {
    backgroundColor: 'red',
  }
});

export default RootContainer;