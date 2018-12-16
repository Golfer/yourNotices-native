import React, {Component} from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios'
// import _ from 'underscore'
// import { connect } from 'react-redux'
// import { getReligionNotices } from '../actions'

import ReligionNotices from '../components/positive/religion_noticies'
import Bibles from '../components/positive/bibles'
import Rodunas from '../components/positive/rodunas'
import Katekhyzms from '../components/positive/katekhyzms'
import AboutGod from '../components/positive/about_god'

// Negative
import Aborts from '../components/negative/aborts'
import Symvols from '../components/negative/symvols'
import Taties from '../components/negative/taties'
import Yogas from '../components/negative/yogas'
import Halloweens from '../components/negative/halloweens'

import WrongEndPoint from '../components/wrongEndPoint'

import { View, Text, StyleSheet } from 'react-native';


import HeaderBlock from './../components/shared/header';


class DetailScreen extends Component {
  renderPositiveTypeList(type){
    switch (type) {
      case "religion-notices":
        return <ReligionNotices/>
      case "bibles":
        return <Bibles/>
      case "rodunas":
        return <Rodunas/>
      case "katekhyzms":
        return <Katekhyzms/>
      case "about-gods":
        return <AboutGod/>
      case "aborts":
        return <Aborts/>
      case "symvols":
        return <Symvols/>
      case "taties":
        return <Taties/>
      case "yogas":
        return <Yogas/>
      case "halloweens":
        return <Halloweens/>
      default:
        return <WrongEndPoint/>
    }
  }

  render(){
    return(
      <View>
        <HeaderBlock navigation={this.props.navigation}/>
        {this.renderPositiveTypeList(this.props.navigation.state.params.endPoint)}
      </View>
    );


  }
}

const styles = StyleSheet.create({
  buttonPositive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  }
})

export default DetailScreen
