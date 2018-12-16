import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { View, Text, ListItem } from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getReligionNotices } from '../../../actions'

class ReligionNotices extends Component {

    componentDidMount(){
        this.props.getReligionNotices();
    }

    listItemTitle(item){
        if (item.attributes["data-uk"] != ""){
          return `UK - ${item.type} - ${item.attributes["data-uk"]}`
        } else if (item.attributes["data-ru"] != ""){
          return `RU - ${item.type} - ${item.attributes["data-ru"]}`
        } else {
          console.log('ITeM', item)
          console.log('ITeM Attributes ', item.attributes)
          return null
        }
    }

    listItemSubtitle(item){
        if (item.attributes["data-uk"] === "" && item.attributes["data-ru"] === ""){
          console.log('ITeM', item)
          console.log('ITeM Attributes ', item.attributes)
          return `- ${item.type} - ${item.attributes["original-link"]}`
        } else{
          return null
        }
    }

    handleScroll(el){
      console.log('handleScroll', el)
    }

    _renderReligioNotices(){
        console.log(this.props.religionNotices)

        let listData = this.props.religionNotices

        return listData.map((item, key) => (
          <TouchableWithoutFeedback key={key}>
            <ListItem
              key={key}
              title={this.listItemTitle(item)}
              subtitle={this.listItemSubtitle(item)}
              leftIcon={<IconEntypo name={'chevron-small-right'} size={30} color="#4F8EF7"/>}
              containerStyle={{
                borderColor: "#D3D5D8",
                borderBottomWidth: 1,
                marginTop: 1
              }}
            />
          </TouchableWithoutFeedback>
        ));

    }

    render() {
        return(
          <ScrollView>
            {this.props.religionNotices.length > 0 && this._renderReligioNotices()}
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