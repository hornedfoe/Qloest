import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboard = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userdata');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
  }, []);

  console.log(user);

  return (
    <>
      {
        user ? (
          navigation.replace('home')
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>Qloest</Text>
            <Text style={styles.description}>
              Qloest is your ultimate destination for all things fashion! Browse through our extensive collection of dresses, ranging from casual wear to formal attire. With our user-friendly interface and secure payment options, shopping for your favorite outfits has never been easier.
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('Login');
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#e75651', // Pink background color
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Black title color
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'violet',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Onboard;
