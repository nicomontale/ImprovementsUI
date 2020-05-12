import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import Mission from './screens/mission'
import Icon from 'react-native-vector-icons/dist/AntDesign'
const Stack = createStackNavigator();
export default class App extends Component {
  
  render() {

    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTransparent: true,
        headerLeft: ()=> (
          <Icon name="menufold"color="#fff" size={29}  style={{marginHorizontal:35,
            marginTop: 20}}/>
        ),
        title: '',
        headerRight: ()=> (
          <Image source={require('./img/react-jpeg.png')} style={styles.ProfileImage} />
        )
      }}/>
     <Stack.Screen name="Mission" component={Mission}
     options={{
      headerTransparent: true,
      headerLeft: ()=> (
        <Icon name="menufold" size={29} color="#000" style= {{marginHorizontal:35,
          marginTop: 20}}/>
      ),
      title: '',
      headerRight: ()=> (
        <Image source={require('./img/react-jpeg.png')}  style={styles.ProfileImage} />
      )
    }}/>
      
      </Stack.Navigator>
      
      
      </NavigationContainer>
     
    )
  }
}

const styles= StyleSheet.create({
   ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 40, marginHorizontal:20,
    marginTop: 10
  }
})


