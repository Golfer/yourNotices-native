import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getReligionNotices } from '../../../actions'

import { ScrollView, ActivityIndicator } from 'react-native'
import  RenderListData from '../../shared/renderListData'

class ReligionNotices extends Component {

    componentDidMount(){
        this.props.getReligionNotices();
    }

    handleScroll(el){
      console.log('handleScroll', el)
    }

    render() {
        return(
          <ScrollView>
            {this.props.religionNotices.length > 0 ? <RenderListData listData={this.props.religionNotices} /> : <ActivityIndicator size="large" color="#0000ff" />}
          </ScrollView>
        )
    }
}

function mapStateToProps(state) {
  return {
    religionNotices: state.religionNotices
  }
}
export default connect(mapStateToProps, {getReligionNotices})(ReligionNotices)