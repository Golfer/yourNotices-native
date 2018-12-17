import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getAborts } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'


class Aborts extends Component {

  componentDidMount(){
    this.props.getAborts();
  }

  render() {
    return(
      <ScrollView>
        {this.props.aborts.length > 0 ? <RenderListData listData={this.props.aborts} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    aborts: state.aborts
  }
}
export default connect(mapStateToProps, {getAborts})(Aborts)
