import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import Login from './components/Login';
import Onboard from './components/Onboard';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const user = AsyncStorage.getItem("userdata");
  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <StatusBar style='auto' hidden={true}/>
    <Stack.Navigator>
      <Stack.Screen name='onboard' component={Onboard} options={{ headerShown: false }}/>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
