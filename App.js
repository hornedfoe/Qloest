import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import Onboard from './components/Onboard';



export default function App() {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
  <Stack.Navigator>
    <Stack.Group>
     <Stack.Screen name='onboard' component={Onboard}/>
     <Stack.Screen name='Login' component={Login}/>
     </Stack.Group>
<>
     <Stack.Group>
          <Stack.Screen name="home" component={Home} />
        </Stack.Group>
        </>


  </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
