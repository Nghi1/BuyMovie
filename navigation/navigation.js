import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab= createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    )
}

const FavStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='FavoritesScreen' component={FavoritesScreen}/>
        </Stack.Navigator>
    )
}

const MainTab=()=>{
    return(
         <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'FavTab') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
      <Tab.Screen name='HomeTab' component={HomeStack} options={{headerShown: false}}/>
          <Tab.Screen name='FavTab' component={FavStack}  options={{headerShown: false}}/>
      </Tab.Navigator>
    )
}

const FilterStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='FilterScreen' component={FilterScreen}/>
        </Stack.Navigator>
    )
}

const Navigation=()=>{
    return(
        <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTab} options={{headerShown: false}}/>
        <Drawer.Screen name="Filter" component={FilterStack} options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;