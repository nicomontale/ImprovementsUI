import React, { Component } from 'react'
import { Text, View ,StyleSheet, ScrollView} from 'react-native'
import* as Animatable from 'react-native-animatable'
import Scroll from '../scroll';
import Support from '../support';
export default class mission extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{flex: 1}}
                contentContainerStyle={{width:'100%', height: '120%'}}
                >
                
                <View style={styles.header}>
                <Text style={styles.iniline}>My Mission</Text>
                </View>
                <View style={styles.memos}>
                <ScrollView 
                horizontal={true}
                contentContainerStyle={{width: '200%'}}
                showsHorizontalScrollIndicator={false}>
                
                <Scroll bgcolor="#FFBE86"
                background={require('../img/graphtwo.png')} 
                title="UI frontend"
                month="Feb-Mar"
                animation="bounceInLeft"/>
                <Scroll bgcolor="#7DC9E7"
                background={require('../img/graphthree.png')} 
                title="10 km corsa"
                month="Feb-Mar"
                animation="bounceInLeft"/>
                <Scroll bgcolor="#FFBE86"
                background={require('../img/graphthree.png')} 
                title="Back-end"
                month="Apr-Mag"
                animation="bounceInLeft"/>
                
                
                </ScrollView>
                
                </View>
                <View style={styles.supportView}>
                <Text style={styles.support}>Support
                
                
                </Text>
                
                
                </View>
                <Animatable.View
                animation="fadeInLeft"
                duration={1500}
                style={[styles.rect, {shadowOffset:{width: 100, height: 100},
                shadowColor: 'rgba(138,149,158.0.2', shadowOpacity: 1, elevation: 30, backgroundColor: 'white'}]}
                >
                
                <Support
                image={require('../img/exercise.png')}
                title="Esercizi"
                subtitle="Difficoltà media"/>

                
                </Animatable.View>
                <Animatable.View
                animation="fadeInRight"
                duration={1500}
                style={[styles.rect, {shadowOffset:{width: 100, height: 100},
                    shadowColor: 'rgba(138,149,158.0.2', shadowOpacity: 1, elevation: 30, backgroundColor: 'white', top: 550}]}
                >
                
                <Support
                image={require('../img/skate.jpg')}
                title="Esercizi"
                subtitle="Difficoltà media"/>

                
                </Animatable.View>
                
                
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        
        backgroundColor: '#fff'
    },
        header: {
            flex: 1,
            left: 25,
            top: 100
        }, iniline: {
            fontSize: 38,
            letterSpacing: -0.5,
            fontWeight: 'bold',
            color: '#2e2e2e'

        }, memos: {
            height: 250,
            position: 'absolute',
            top: 160,
            width:' 100%' ,
            marginLeft: 10
        },
        supportView: {
            position: 'absolute',
            left: 25,
            top: 420
        }, 
        support: {
            fontSize: 25,
            fontWeight: 'bold',
            letterSpacing: -0.5,
            color: '#2e2e2e'
        }, rect: {
            height: 65,
            width: 350,
            position:'absolute',
            alignSelf: 'center',
            top: 470,
            borderRadius: 18
        }
    })