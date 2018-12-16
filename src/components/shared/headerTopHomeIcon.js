import React, {Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from "react-navigation";


class HeaderTopHomeIcon extends Component {

  _handleHomeIcon(){
    console.log('handleHomeIcon ---- ++++ ', this.props)
    return this.props.navigation.navigate('Dashboard')
  }

  render(){
    return(
      <Icon
        name='home'
        size={30}
        color="#4F8EF7"
        onPress={() => this._handleHomeIcon()}
      />
    );

  }
}

export default HeaderTopHomeIcon;