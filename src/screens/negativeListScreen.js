import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Button, ListItem } from 'react-native-elements';

import HeaderBlock from './../components/shared/header';

const listNegative = [
  {
    name: 'Symvols',
    screenName: 'negativeSymvolsScreen',
    apiEndPoint: 'symvols'
  }
]


class NegativeScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock/>
        <Text>NegativeScreen</Text>
        {
          listNegative.map((l, i) => (
            <ListItem
              component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95}

              linearGradientProps={{
                colors: ['#FF9800', '#F44336', '#F44336', '#F44336', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              ViewComponent={LinearGradient}
              chevronColor="white"
              chevron
              titleStyle={{ color: 'blue', fontWeight: 'bold' }}
              key={i}
              title={l.name}
              leftAvatar={{ source: { uri: l.avatarUrl } }}
              subtitle={l.screenName}
            />
          ))
        }
      </View>
    );
  }
}

export default NegativeScreen