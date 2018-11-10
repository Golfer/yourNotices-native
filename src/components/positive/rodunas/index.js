// https://yournotices.herokuapp.com/api/v1/positive/rodunas



import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet} from 'react-native';

export default class RodunasIndex extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://forsoul.herokuapp.com/api/needs/psalms')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    // dataSource: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        // return(<div>
        //     {JSON.stringify(this.state.dataSource)}
        // </div>);
        return(
            <View style={{flex: 1, paddingTop:20}}>
                {/*<FlatList*/}
                    {/*data={this.state.dataSource}*/}
                    {/*renderItem={({item}) => <Text style={styles.itemLiSlug}>{item.name_ua}</Text>}*/}
                    {/*keyExtractor={({id}, index) => id}*/}
                {/*/>*/}
                {/*<FlatList*/}
                    {/*data={this.state.dataSource}*/}
                    {/*renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}*/}
                    {/*keyExtractor={({id}, index) => id}*/}
                {/*/>*/}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemLiSlug: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
});

// ----




// import React from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';
//
// export default class RodunasIndex extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={ isLoading: true}
//     }
//
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TextInput
//                     autoCorrect={false}
//                     placeholder={this.props.placeholder}
//                     placeholderTextColor="white"
//                     underlineColorAndroid="transparent"
//                     style={styles.textInput}
//                     clearButtonMode="always"
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         height: 40,
//         marginTop: 20,
//         backgroundColor: '#666',
//         marginHorizontal: 40,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//     },
//     textInput: {
//         flex: 1,
//         color: 'white',
//     },
// });
// class RodunasIndex extends Component {
//
//     render() {
//         return(<View>
            {/*<Text>Test Rodunas index</Text>*/}
        // </View>)
    // }
// }
//
// export default RodunasIndex;