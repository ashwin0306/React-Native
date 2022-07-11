import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './Screens/Home';
import Modal from './Screens/Modal';
import Second from './Screens/Second';
const Stack = createNativeStackNavigator()


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={Second} />
         </Stack.Group> 
        <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="Modal" component={Modal}/>    
        </Stack.Group>       
    </Stack.Navigator>
  )
}

export default StackNavigator