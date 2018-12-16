import React, {Component} from 'react';
import { Header } from 'react-native-elements';
import HeaderTopHomeIcon from './headerTopHomeIcon'
import HeaderTopBackIcon from './headerTopBackIcon'
import RF from "react-native-responsive-fontsize"

class HeaderBlock extends React.Component {
  render(){
    return(
      <Header
        backgroundColor='lightblue'
        leftComponent={<HeaderTopBackIcon navigation={this.props.navigation}/>}
        centerComponent={{ text: 'Your Notices', style: { color: '#fff', fontSize: RF(2.8), fontWeight: 'bold'} }}
        rightComponent={<HeaderTopHomeIcon navigation={this.props.navigation}/>}
        // outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
        // innerContainerStyles={{ justifyContent: 'space-around' }}
      />
    );

  }
}

export default HeaderBlock;
