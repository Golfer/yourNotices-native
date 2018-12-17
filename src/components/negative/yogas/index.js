import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableWithoutFeedback, Linking, ActivityIndicator } from 'react-native'
import { View, Text, ListItem } from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { getYogas } from '../../../actions'

class Yogas extends Component {

  componentDidMount(){
    this.props.getYogas();
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
    if (item.attributes["title-original-link-uk"] != "") {
      return `UK - ${item.type} - ${item.attributes["title-original-link-uk"]}`
    } else if (item.attributes["title-original-link-ru"] != "") {
      return `RU - ${item.type} - ${item.attributes["title-original-link-ru"]}`
    } else {
      return null
    }
  }

  handleScroll(el){
    console.log('handleScroll', el)
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

  _renderlistYogas(){

    let listData = this.props.yogas
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
          onPress={this.__OnPress.bind({item})}
        />
       </TouchableWithoutFeedback>
    ));
  }

  render() {
    return(
      <ScrollView>
        {this.props.yogas.length > 0 ? this._renderlistYogas() : <ActivityIndicator size="large" color="#0000ff" />}
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
