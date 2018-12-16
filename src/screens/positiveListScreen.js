import React, {Component} from 'react';
import { StyleSheet, View, Text, BackHandler, TouchableHighlight } from 'react-native';
import HeaderBlock from './../components/shared/header';
import { NavigationActions } from "react-navigation";
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

class PositiveScreen extends Component {
  goToNextScreen = (apiEndPoint) => {
    return this.props.navigation.navigate('Detail', {endPoint: apiEndPoint})
  }

  render() {
    return (
      <View>
        <HeaderBlock navigation={this.props.navigation}/>
        {
          listPositiveData.map((item, key) => (
            <TouchableHighlight key={key} onPress={() => this.goToNextScreen(item.apiEndPoint)}>
              <ListItem
                key={key}
                title={item.name}
                rightIcon={{name: 'menu'}}
                containerStyle={{
                  borderColor: "#D3D5D8",
                  borderBottomWidth: 1,
                  marginTop: 1
                }}
              />
            </TouchableHighlight>
          ))
        }
      </View>
    );
  }
}

export default PositiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemLiActiveElement: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  itemLiElement: {
    color: 'green',
  },
});

const listPositiveData = [
  {
    name: 'Religion Notices',
    screenName: 'positiveReligionNoticesScreen',
    apiEndPoint: 'religion-notices',
    icon: 'menu',
  },
  {
    name: 'Roduna',
    screenName: 'positiveRodunasScreen',
    apiEndPoint: 'rodunas',
    icon: 'menu',
  },
  {
    name: 'Bible',
    screenName: 'positiveBiblesScreen',
    apiEndPoint: 'bibles',
    icon: 'menu',
  },
  {
    name: 'Katekhyzms',
    screenName: 'positiveKatekhyzmsScreen',
    apiEndPoint: 'katekhyzms',
    icon: 'menu',
  },
  {
    name: 'About God',
    screenName: 'positiveAboutGodsScreen',
    apiEndPoint: 'about-gods',
    icon: 'menu',
  },
];
