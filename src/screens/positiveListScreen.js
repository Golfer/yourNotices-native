import React, {Component} from 'react';
import {
  View,
  Text,
  // Button,
} from 'react-native';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Button, ListItem } from 'react-native-elements';

import HeaderBlock from './../components/shared/header';
import Icon from 'react-native-vector-icons/FontAwesome';

const listPositive = [
  {
    name: 'Roduna',
    screenName: 'positiveRodunasScreen',
    apiEndPoint: 'rodunas',
    // avatarUrl: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_960_720.png'
  },
  {
    name: 'Bible',
    screenName: 'positiveBiblesScreen',
    apiEndPoint: 'bibles',
    // avatarUrl: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_960_720.png'
  },
  {
    name: 'Katekhyzms',
    screenName: 'positiveKatekhyzmsScreen',
    apiEndPoint: 'katekhyzms',
    // avatarUrl: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_960_720.png'
  },
  {
    name: 'Religion Notices',
    screenName: 'positiveReligionNoticesScreen',
    apiEndPoint: 'religion-notices',
    // avatarUrl: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_960_720.png'
  },
  {
    name: 'About God',
    screenName: 'positiveAboutGodsScreen',
    apiEndPoint: 'about-gods',
    // avatarUrl: 'https://cdn.pixabay.com/photo/2017/05/15/23/33/family-icon-2316421_960_720.png'
  },
]

class PositiveScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock/>
        {/*<Button*/}
          {/*title="Go to Dashboard"*/}
          {/*onPress={() => this.props.navigation.navigate('Dashboard')}*/}
        {/*/>*/}
        <Text>PositiveScreen</Text>
        {
          listPositive.map((l, i) => (
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

export default PositiveScreen