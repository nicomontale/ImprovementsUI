import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import * as Animated from 'react-native-animatable'
export default class scroll extends Component {
    render() {
        return (
            <Animated.View animation={this.props.animation} duration={1200}
            style={[styles.memo1, {backgroundColor: this.props.bgcolor}]}>
            
            <View style={styles.insideone}>
            <Text style={{fontSize: 20, color: '#fff', width: 100}}> 
             {this.props.title}
            </Text>
            
            <TouchableOpacity style={styles.insidethree}>
            <Icon name="info" size={22} color="white" />
            
            </TouchableOpacity>
            
          
            
            </View>
            <Text style={{color: '#fff',fontSize: 14, marginVertical: 0, marginLeft: 10}}>
            {this.props.month}
            </Text>
       
            <View style={styles.insidetwo}>
            <ImageBackground source={this.props.background} style={{width:'100%', height:'100%'}}/>
            
            </View>
            
            </Animated.View>
        )
    }
}

const styles= StyleSheet.create({
    memo1: {
        flex:1,
        margin: 5,
        borderRadius: 18
    },
    insideone: {
        flex: 1,
        padding: 2,
      flexDirection: 'row', marginTop: 10, marginLeft: 10

    }, insidetwo: {
        flex: 2,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }, insidethree: {
        alignItems: 'flex-end',
        marginLeft: 120, marginTop: 10
    }
   
    
})