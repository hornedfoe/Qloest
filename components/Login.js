import { View, Text , TextInput , TouchableOpacity, StyleSheet, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = () => {
  const [type , setType] = useState(1)
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [phno , setPhno] = useState("")
  const navigation = useNavigation();

  
  const signIn = async() => {
    const formdata = {
      name  : name,
      email : email,
      phonenumber : phno,
      password : password
    }
    try{
      const res = await axios.post("https://qloest-backend.onrender.com/auth/login" , formdata);
      console.log(res.data.user)
      await AsyncStorage.setItem("userdata",JSON.stringify(res.data.user))
      const s = await AsyncStorage.getItem("userdata");
      navigation.replace('home')
      
    }
    catch(e){
      Alert.alert("Oops :(" , "Invalid user credentials")
    }
  }

  const signUp = async() => {
    const formdata = {
      name  : name,
      email : email,
      phonenumber : phno,
      password : password
    }
    try{
      console.log(formdata);
      const res = await axios.post("https://qloest-backend.onrender.com/auth/register" , formdata);
      Alert.alert("😊" , "User created successfully")
      setType(1)
      
    }
    catch(e){
      console.log(e);
      Alert.alert("Oops :(" , "Invalid user credentials")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {type == 1 ? (
          <View>
            <Text style={styles.title}>SignIn</Text>
            <Text style={styles.subtitle}>Access to your account</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter email'
                value={email}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>password</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder='Enter password'
                value={password}
                style={styles.input}
                secureTextEntry={true}  
              />
            </View>
            <TouchableOpacity onPress={signIn} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(0)}>
              <Text style={styles.link}>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>SignUp</Text>
            <Text style={styles.subtitle}>Create your account</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                placeholder='Enter name'
                value={name}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter email'
                value={email}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder='Enter password'
                value={password}
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                onChangeText={(text) => setPhno(text)}
                placeholder='Enter phone number'
                value={phno}
                style={styles.input}
              />
            </View>
            <TouchableOpacity onPress={signUp} style={styles.button}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(1)}>
              <Text style={styles.link}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  box: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
