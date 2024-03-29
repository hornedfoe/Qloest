import { View, Text, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'
import data from '../data.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DUMMY_DATA = data;

const Feed = () => {

  const userLiked = (card) => {
    console.log('Liked:', card.name);
  }

  const userAddedThis = async (card) => {
    try {
      // Get existing cart items from AsyncStorage
      const existingCart = await AsyncStorage.getItem('userCart');
  
      // Parse existing cart items (if any)
      let parsedCart = existingCart ? JSON.parse(existingCart) : [];
  
      // Check if the card already exists in the cart
      const isCardAlreadyAdded = parsedCart.some(item => item.id === card.id);
  
      if (isCardAlreadyAdded) {
        console.log(`${card.name} is already in the cart.`);
        return; // Exit the function if the card is already in the cart
      }
  
      // Add the new card to the cart
      parsedCart.push(card);
  
      // Update AsyncStorage with the new cart items
      await AsyncStorage.setItem('userCart', JSON.stringify(parsedCart));
  
      console.log('Added to cart:', card.name);
      console.log('Updated cart:', parsedCart); // Optional: Log the updated cart
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }
  const userRejected = (card) => {
    console.log('Rejected:', card.name);
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          paddingTop: 20,
          fontSize: 30
        }}
      >
        Qloest
      </Text>
      <Swiper
        containerStyle={{
          backgroundColor: "transparent",
        }}
        cards={DUMMY_DATA}
        stackSize={DUMMY_DATA.length}
        cardIndex={0}
        disableBottomSwipe={true}
        onSwipedLeft={(cardIndex) => userRejected(DUMMY_DATA[cardIndex])}
        onSwipedRight={(cardIndex) => userLiked(DUMMY_DATA[cardIndex])}
        onSwipedTop={(cardIndex) => userAddedThis(DUMMY_DATA[cardIndex])}
        overlayLabels={{
          left: {
            style: {
              wrapper: {
                opacity: 0.5,
                backgroundColor: 'rgba(255, 65, 51 , 0.25)',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }
            },
          },
          right: {
            style: {
              wrapper: {
                backgroundColor: 'rgba(22, 196, 51 , 0.25)',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }
            },
          },
        }}

        renderCard={(card) => {
          return card ? (
            <View key={card.id} style={{ backgroundColor: '#fff', height: '100%', borderRadius: 20, position: 'relative' }}>
              <Image
                style={{ position: 'absolute', top: 0, height: '100%', width: '100%', borderRadius: 20 }}
                source={{ uri: card.image }}
              />
              <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#fff', width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View>
                  <Text>{card.name}</Text>
                </View>
                <View>
                  <Text>{card.price}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={{ position: 'relative', backgroundColor: '#fff', height: '75%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
              <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>No More Profiles</Text>
            </View>
          )
        }}
      >
      </Swiper>
    </View>
  )
}

export default Feed
