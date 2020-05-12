import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import Day from './day'
import Card from '../card';

export default class home extends Component {
    state={
        color: '#136Df3',
        activestate: 'rgba(255,255,255, 0.291821)'
    }
    change=()=> {
        return(
            this.props.navigation.navigate('Mission')
        )
    }
    render() {
        
        const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
        const config = {
            line: {
              visible: true,
              strokeWidth: 1,
              strokeColor: "#54a0ff"
            },
            area: {
              visible: false
            },
            tooltip: {
              visible: true,
              labelFontSize: 10
            },
            grid: {
              stepSize: 10000
            },
            yAxis: {
              labelColor: "#54a0ff"
            },
            insetY: 10,
            insetX: 10
          };
        return (
            <View style={styles.container}>
                <View style={styles.containerone}>
                <View style={styles.boxone}></View>
                <View style={styles.boxtwo}>
                <Text style={styles.name}>Ciao, nicola </Text>
                <Text style={styles.subtitle}>Questi sono i tuoi miglioramenti</Text>
                </View>
                <View style={styles.boxthree}>
                <ImageBackground source={require('../img/graphone.png')} style={{width: 360, height: '100%'}}/>
                </View>
                <View style={styles.boxfour}>
                <Day dayname="Lun"/>
                <Day dayname="Mar"/>
                <Day dayname="Mer"/>
                <Day dayname="Gio" active={this.state.activestate}/>
                <Day dayname="Ven"/>
                <Day dayname="Sab"/>
                <Day dayname="Dom"/>

                
                </View>
                </View>
                <View style={styles.containertwo}>
                <View style={styles.line}>
                
                </View>
                <View style={styles.progress}>
                <Text style={styles.textone}>My Progress</Text>
                </View>
                <View style={styles.cards}>
                <Card 
                move="bounceInLeft"
                title="Mission"
                subtitle="85% completed"
                completed="85%"
                />
                <Card 
                move="bounceInLeft"
                title="Mission"
                subtitle="85% completed"
                completed="85%"
                screenchange={()=>this.change()}
                />
                <Card 
                move="bounceInLeft"
                title="Mission"
                subtitle="85% completed"
                completed="85%"
                screenchange={()=>this.change()}
                />
                </View>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#136Df3'

    }, containerone: {
        flex: 1.5,

    }, containertwo: {
        flex:1,
        backgroundColor: '#fff',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    },
     boxone: {
         flex: 1,

     },
     boxtwo: {
         flex: 0.8,
         marginHorizontal: 35
     },
     boxthree: {
         flex: 2.5
     },
     boxfour: {
         flex: 0.5,
         color: '#fff',
         flexDirection: 'row'
     }, name:  {
         fontSize: 35,
         color: '#fff',
         fontWeight: 'bold',
         letterSpacing: -0.5

     } , subtitle: {
         fontSize: 20,
         color: '#fff'
     },
     line: {
         width: 66,
height: 4,
backgroundColor: '#f4f0f0',
borderRadius: 2,
marginVertical: 25,
left: 156
     }, 
     progress: {
   left: 50,

     },
     textone: {
         fontSize: 20,
        color: '#2D2D2D',
        letterSpacing: -0.5 
     },
      cards: {
          flex: 1,
          marginTop: 10,
         
          justifyContent: 'space-between'
      }
  })
