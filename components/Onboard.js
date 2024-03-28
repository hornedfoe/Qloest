import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboard = () => {
    const navigation  = useNavigation();
  return (
    <View>
      <Text>Onboard</Text>
      <Button onPress={()=>{navigation.replace('Login')}} title='login'></Button>
    </View>
  )
}

export default Onboard