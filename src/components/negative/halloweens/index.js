import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback, Linking } from 'react-native'
import { View, Text, ListItem } from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getHalloweens } from '../../../actions'

class Halloweens extends Component {

  componentDidMount(){
    this.props.getHalloweens();
  }

  listItemTitle(item){
    if (item.attributes["data-uk"] != ""){
      return `UK - ${item.type} - ${item.attributes["data-uk"]}`
    } else if (item.attributes["data-ru"] != ""){
      return `RU - ${item.type} - ${item.attributes["data-ru"]}`
    } else {
      return null
    }
  }

  listItemSubtitle(item){
    if (item.attributes["title-original-link-uk"] != "") {
      return `UK - ${item.type} - ${item.attributes["title-original-link-uk"]}`
    } else if (item.attributes["title-original-link-ru"] != "") {
      return `RU - ${item.type} - ${item.attributes["title-original-link-ru"]}`
    } else {
      return null
    }
  }

  __OnPress(item){
    let itemData = this.item

    let uri = itemData.attributes["original-link"]

    return Linking.canOpenURL(uri).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + uri);
      } else {
        Linking.openURL(uri);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  handleScroll(el){
    console.log('handleScroll', el)
  }

  _renderlistHalloweens(){

    let listData = this.props.halloweens
    return listData.map((item, key) => (
      <TouchableWithoutFeedback key={key} >
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
          onPress={this.__OnPress.bind({item})}
        />
       </TouchableWithoutFeedback>
    ));
  }

  render() {
    return(
      <ScrollView>
        {this.props.halloweens.length > 0 && this._renderlistHalloweens()}
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
