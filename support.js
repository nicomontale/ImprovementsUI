import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
export default class support extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection:'row'}}>
              <View style={{flex:2 , alignItems: 'center', justifyContent: 'center'}}>
              <Image source={this.props.image} style={{height: '55%', width:'55%', backgroundColor: 'white'}}/>
              </View>
              <View style={{flex: 5, margin: 15}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',letterSpacing: -0.5, color: '#2d2d2d'}}>{this.props.title}
              </Text>
              <Text style={{fontSize: 15,color: '#bec4c9'}}>{this.props.title}
              </Text>
              
              </View>
<View style={{flex: 1,
alignItems: 'center'}}>
<TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
<Icon name="rightcircle" size={24}/>

</TouchableOpacity>

</View>
              
            </View>
        )
    }
}
