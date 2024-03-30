import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      fetchUser()
    } , [])
  );

  const fetchUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('userdata');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userdata');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {user && (
          <View style={styles.userDataContainer}>
            <FontAwesome name="user" size={60} color="#3498db" style={styles.icon} />
            <Text style={styles.labels}>{user.name}</Text>
            <Text style={styles.labels}>{user.email}</Text>
            <Text style={styles.labels}>{user.phonenumber}</Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, // Space for the logout button
  },
  userDataContainer: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    fontSize:25
  },
  labels: {
    marginBottom: 5,
    marginTop: 5,
    fontSize:20
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },
});

export default Profile;
