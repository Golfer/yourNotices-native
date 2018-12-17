import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBibles } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Bibles extends Component {

  componentDidMount(){
    this.props.getBibles();
  }

  render() {
    return(
      <ScrollView>
        {this.props.bibles.length > 0 ? <RenderListData listData={this.props.bibles} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    bibles: state.bibles
  }
}
export default connect(mapStateToProps, {getBibles})(Bibles)
