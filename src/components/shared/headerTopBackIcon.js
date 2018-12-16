import React, {Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from "react-navigation";


class HeaderTopBackIcon extends Component {


  render(){

    return(
      (<Icon
        name="back"
        size={30}
        color="#4F8EF7"
        onPress={()=> this.props.navigation.goBack()}
      />)
    );

  }
}

export default HeaderTopBackIcon;