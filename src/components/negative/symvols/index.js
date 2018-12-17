import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getSymvols } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Symvols extends Component {

  componentDidMount(){
    this.props.getSymvols();
  }

  render() {
    return(
      <ScrollView>
        {this.props.symvols.length > 0 ? <RenderListData listData={this.props.symvols} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    symvols: state.symvols
  }
}
export default connect(mapStateToProps, {getSymvols})(Symvols)
