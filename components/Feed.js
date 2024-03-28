import { View, Text,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

const DUMMY_DATA = [
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    displayName: "number 1",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://legacy.reactjs.org/logo-og.png',
  }
];

const Feed = () => {
  return (
    <View
      style = {{
        display : 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Text
        style = {{
          paddingTop:20,
          fontSize:30
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
        animateCardOpacity
        verticalSwipe = {false}

        renderCard={(card) => {
          return card ? (
            <View key={card.id} style={{ backgroundColor: '#fff', height: '100%', borderRadius: 20, position: 'relative' }}>
              <Image
                style={{ position: 'absolute', top: 0, height: '100%', width: '100%', borderRadius: 20 }}
                source={{ uri: card.photoURL }}
              />
              <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#fff', width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 24, paddingVertical: 8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View>
                  <Text>{card.displayName}</Text>
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