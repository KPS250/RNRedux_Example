import { createStackNavigator, createAppContainer } from "react-navigation"
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../components/HomeScreen'
import Electronics from '../components/Electronics'
import Furniture from '../components/Furniture'
import Cart from '../components/Cart'
import CartIcon from '../components/CartIcon'

const Router = createStackNavigator(
    {
        Home: HomeScreen,
        Electronics:  Electronics,
        Furniture: Furniture,
        Cart: Cart
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: ({ navigation }) => ({
          
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight:(
             <CartIcon navigation={navigation}/>
          ),
        }),

        
    }
    
);

export default createAppContainer(Router);