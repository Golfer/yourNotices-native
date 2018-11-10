import React, {Component} from 'react';
import { Header } from 'react-native-elements';
import RF from "react-native-responsive-fontsize"

class HeaderBlock extends React.Component {
  render(){
    return(
      <Header
        // backgroundColor='lightblue'
        //leftComponent={{ icon: 'menu', color: '#f5f5f5' }}
        centerComponent={{ text: 'Your Nitices', style: { color: '#fff', fontSize: RF(2.8), fontWeight: 'bold'} }}
        // rightComponent={{ icon: 'home', color: '#f5f5f5' }}
        // outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
        // innerContainerStyles={{ justifyContent: 'space-around' }}
      />
    );

  }
}

export default HeaderBlock;
