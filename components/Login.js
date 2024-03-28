import { View, Text , TextInput , TouchableOpacity} from 'react-native'

import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'



const Login = () => {
  const [type , setType] = useState(0)
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [phno , setPhno] = useState("")
  const navigation = useNavigation();
  const signIn = () => {

    console.log(email , password);
    navigation.replace('home')
    setEmail("")
  }

  const signUp = () => {
    console.log(name , phno , email , password);
    navigation.replace('home')
  }

  return (
    <>
      {
        type == 1 ? (
          <View>
            <Text>SignIn</Text>
            <Text>Access to your account</Text>
            <Text>Email</Text>
            <TextInput
              onChangeText = {(text) => setEmail(text)}
              placeholder = 'enter email'
              value = {email}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder='password'
              value = {password}
              secureTextEntry = {true}
            />
            <TouchableOpacity
              onPress={signUp}
            >
              <Text>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setType(0)
              }}
            >
              <Text>
                Doesn't have an account?
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>SignUp</Text>
            <Text>Create your account</Text>
            <Text>Name</Text>
            <TextInput
              onChangeText = {(text) => setName(text)}
              placeholder = 'enter name'
              value = {name}
            />
            <Text>phno</Text>
            <TextInput
              onChangeText = {(text) => setPhno(text)}
              placeholder = 'enter phno'
              value = {phno}
            />
            <Text>Email</Text>
            <TextInput
              onChangeText = {(text) => setEmail(text)}
              placeholder = 'enter email'
              value = {email}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder='password'
              value = {password}
              secureTextEntry = {true}
            />
            <TouchableOpacity
              onPress={signIn}
            >
              <Text>
                Create
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setType(1)
              }}
            >
              <Text>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        )
      }
    </>
  )
}

export default Login;