import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getRodunas } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Rodunas extends Component {

  componentDidMount(){
    this.props.getRodunas();
  }

  render() {
    return(
      <ScrollView>
        {this.props.rodunas.length > 0 ? <RenderListData listData={this.props.rodunas} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    rodunas: state.rodunas
  }
}
export default connect(mapStateToProps, {getRodunas})(Rodunas)
