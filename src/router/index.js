import React from 'react';
import  {NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../modules/auth/login';
import Orders from '../modules/orders';

export default function Router(){

    const Stack=createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}