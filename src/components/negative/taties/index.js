import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getTaties } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Taties extends Component {

  componentDidMount(){
    this.props.getTaties();
  }

  render() {
    return(
      <ScrollView>
        {this.props.taties.length > 0 ? <RenderListData listData={this.props.taties} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    taties: state.taties
  }
}
export default connect(mapStateToProps, {getTaties})(Taties)
