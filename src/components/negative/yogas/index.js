import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getYogas } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Yogas extends Component {

  componentDidMount(){
    this.props.getYogas();
  }

  render() {
    return(
      <ScrollView>
        {this.props.yogas.length > 0 ? <RenderListData listData={this.props.yogas} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    yogas: state.yogas
  }
}
export default connect(mapStateToProps, {getYogas})(getYogas)
