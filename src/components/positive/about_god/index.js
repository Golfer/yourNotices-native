import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { ScrollView, ActivityIndicator } from 'react-native'
import { ScrollView, TouchableWithoutFeedback, Linking, ActivityIndicator } from 'react-native'
import { View, Text, ListItem } from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getAboutGod } from '../../../actions'

import  RenderListData from '../../shared/renderListData'

class AboutGod extends Component {

  componentDidMount(){
    this.props.getAboutGod();
  }

  render() {
    return(
      <ScrollView>
        {this.props.aboutGod.length > 0 ? <RenderListData listData={this.props.aboutGod} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    aboutGod: state.aboutGod
  }
}
export default connect(mapStateToProps, {getAboutGod})(AboutGod)
