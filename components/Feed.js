import { View, Text,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-deck-swiper'

const DUMMY_DATA = [
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  },
  {
    displayName: "number 1",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 2",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  } , 
  {
    displayName: "number 3",
    photoURL : 'https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
  }
];

// UP - addtocart

// left - reject

// right - like

const Feed = () => {

  const userLiked = () => {
    console.log('liked')
  }

  const userSkipped = () => {
    console.log('skipped')
  }

  const userRejected = () => {
    console.log('rejected')
  }

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
        disableBottomSwipe = {true}
        onSwipedLeft = {userSkipped}
        onSwipedRight = {userLiked}
        onSwipedTop = {userRejected}
        overlayLabels = {{
          left : {
            style: {
              wrapper: {
                opacity:0.5,
                backgroundColor: 'rgba(51, 71, 255 , 0.5)',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:20,
              }
           },
          },
          top : {
            style: {
              wrapper: {
                backgroundColor: 'rgba(255, 65, 51 , 0.5)',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:20,
              }
           },
          },
          right : {
            style: {
              wrapper: {
                backgroundColor: 'rgba(22, 196, 51 , 0.5)',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:20,
                
              }
           },
          },
        }}

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