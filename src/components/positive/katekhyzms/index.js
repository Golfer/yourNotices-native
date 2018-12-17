import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getKatekhyzms } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class Katekhyzms extends Component {

  componentDidMount(){
    this.props.getKatekhyzms();
  }

  render() {
    return(
      <ScrollView>
        {this.props.katekhyzms.length > 0 ? <RenderListData listData={this.props.katekhyzms} /> : <ActivityIndicator size="large" color="#0000ff" />}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    katekhyzms: state.katekhyzms
  }
}
export default connect(mapStateToProps, {getKatekhyzms})(Katekhyzms)
