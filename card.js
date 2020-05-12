import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity, Image } from 'react-native'
import* as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign'
export default class card extends Component {
    render() {
        return (
            <Animatable.View animation={this.props.animation} duration={1500} style={styles.cardone}>
            <TouchableOpacity style={styles.box1}
            onPress={this.props.screenchange} >
            <View style={{borderRadius: 21, backgroundColor: 'rgba(255,19,134, 0.2)',marginLeft: 20,width: '70%', height: '70%', flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="checksquareo" size={34}/>
            </View>
            
            </TouchableOpacity>
            <View style={styles.box2}>
            <Text style={{fontSize:20, color: '#2D2D2D', letterSpacing: -0.5}}>
            {this.props.title}
            
            
            </Text>
            <Text style={{fontSize: 15, color: '#BEC4C9', letterSpacing: -0.5, paddingVertical: 5 }}>
            {this.props.subtitle}
            </Text>
            
            
            
            
            </View>
            <View style={styles.box3}>
            <View style={{height: '100%', width: '80%', borderWidth: 1, borderColor:'#136DF3', borderRadius: 100,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#136DF3'}}>
            {this.props.completed}
            </Text>
            </View>
            
            
            </View>
            </Animatable.View>
        )
    }
}
const styles= StyleSheet.create({
cardone: {
    flex:1,
    marginBottom: 15,
    flexDirection: 'row',
    
    
    
}, 
cardtwo: {
    flex: 1
}, box1: {
    flex: 1,
}, box2: {
    flex: 1
}, box3: {
    flex:1
}
})