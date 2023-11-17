import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import SingleProductScreen from '../Screens/SingleProductScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import SingleQuizScreen from '../Screens/SingleQuizScreen'
import NoticiasScreen from '../Screens/NoticiasScreen'
import HelpScreen from '../Screens/HelpScreen'



const Stack = createNativeStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Single" component={SingleProductScreen} />
    <Stack.Screen name="quiz" component={SingleQuizScreen} />
    <Stack.Screen name="ayuda" component={HelpScreen} />
    <Stack.Screen name="noticias" component={NoticiasScreen} />
    <Stack.Screen name="Ayuda" component={HelpScreen} />

    <Stack.Screen name="Shipping" component={ShippingScreen} />
    <Stack.Screen name="Checkout" component={PaymentScreen} />
    <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />

  </Stack.Navigator>
  ); 
}

export default StackNav