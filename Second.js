import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Second = () => {
const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is second screen</Text>
      <Button onPress={()=>navigation.navigate("Modal")}
      title="Open Modal!"/>
    </SafeAreaView>
  )
}

export default Second