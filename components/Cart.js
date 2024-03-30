import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchCartItems(); // Fetch cart items every time the screen comes into focus
    }, [])
  );


  // Function to fetch cart items from AsyncStorage
  const fetchCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userCart');
      if (jsonValue !== null) {
        setCartItems(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  // Function to parse price from string "$500" to numerical value 500
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('$', '').replace(',', ''));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + parsePrice(item.price), 0);

  // Function to handle the buy button press
  const handleBuy = async (index) => {
    console.log('Bought');
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    setCartItems(updatedCart);
    await AsyncStorage.setItem('userCart', JSON.stringify(updatedCart)); // Update AsyncStorage
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity onPress={() => handleBuy(index)} style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  price: {
    marginLeft: 'auto',
  },
  footer: {
    borderTopWidth: 1,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: 'blue',
    padding: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cart;
