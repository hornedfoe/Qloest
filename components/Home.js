import { View, Text } from 'react-native'
import React from 'react'
import Feed from './Feed';
import Cart from './Cart';
import Profile from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather} from "@expo/vector-icons";

const Home = () => {
    const Tab = createBottomTabNavigator();
    const activeColor = 'red'; // Define the active color

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Feed") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Cart") {
                            iconName = focused ? "cart" : "cart-outline";
                        } else if (route.name === "Profile") {
                            iconName = focused ? "person" : "person-outline";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarActiveTintColor: activeColor, // Use the active color variable
                    tabBarInactiveTintColor: "gray",
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        borderTopColor: "gray",
                        paddingBottom: 8,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{ tabBarLabel: "Home", headerShown: false }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{ tabBarLabel: "Cart", headerShown: false }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{ tabBarLabel: "Profile", headerShown: false }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default Home;
