import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Button, ListItem } from 'react-native-elements';

import HeaderBlock from './../components/shared/header';

class NegativeScreen extends Component {

  goToNextScreen = (apiEndPoint) => {
    return this.props.navigation.navigate('Detail', {endPoint: apiEndPoint})
  }

  render() {
    return (
      <View>
        <HeaderBlock navigation={this.props.navigation}/>
        {
          listNegative.map((item, key) => (
            <TouchableHighlight key={key} onPress={() => this.goToNextScreen(item.apiEndPoint)}>
              <ListItem
                key={key}
                title={item.name}
                rightIcon={{name: 'menu'}}
                containerStyle={{
                  borderColor: "#D3D5D8",
                  borderBottomWidth: 1,
                  marginTop: 10
                }}
              />
            </TouchableHighlight>
          ))
        }
      </View>
    );
  }
}

export default NegativeScreen

const listNegative = [
  {
    name: 'Symvols',
    screenName: 'negativeSymvolsScreen',
    apiEndPoint: 'symvols'
  },
  {
    name: 'Aborts',
    screenName: 'negativeAbortsScreen',
    apiEndPoint: 'aborts'
  },
  {
    name: 'Taties',
    screenName: 'negativeTatiesScreen',
    apiEndPoint: 'taties'
  },
  // {
  //   name: 'Yogas',
  //   screenName: 'negativeYogasScreen',
  //   apiEndPoint: 'yogas'
  // },
  {
    name: 'Halloweens',
    screenName: 'negativeHalloweensScreen',
    apiEndPoint: 'halloweens'
  }
]
