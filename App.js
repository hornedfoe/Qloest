import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboard from './components/Onboard';
import Login from './components/Login';
import Home from './components/Home';

export default function App() {
  const Stack = createStackNavigator();
  return (
 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group
              screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
            >
              <Stack.Screen name="Onboard" component={Onboard} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="Search" component={Home} />
            </Stack.Group>
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