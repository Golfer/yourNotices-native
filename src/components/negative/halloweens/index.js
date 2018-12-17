import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getHalloweens } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Halloweens extends Component {

  componentDidMount(){
    this.props.getHalloweens();
  }

  render() {
    return(
      <ScrollView>
        {this.props.halloweens.length > 0 ? <RenderListData listData={this.props.halloweens} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    halloweens: state.halloweens
  }
}
export default connect(mapStateToProps, {getHalloweens})(Halloweens)
