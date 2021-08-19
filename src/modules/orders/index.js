import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import History from "./screens/History";
import Current from './screens/Current'
import React from "react";
import { Image } from "react-native";

export default function Orders(props){
    const Tab=createBottomTabNavigator();
    return(
        <Tab.Navigator
            screenOptions={
        ({route})=>({
          tabBarIcon:({focused,icon,size})=>{
            let i;
              if(route.name==="Order History"){
                i=focused?require("../../assets/images/shopping-bag-2.png"):require("../../assets/images/shopping-bag.png");
              }
              else if(route.name==="Current Orders"){
                i=focused?require("../../assets/images/order-2.png"):require("../../assets/images/order.png");
              }
              return <Image style={{height:25,width:25}} source={i}/>;
          },
        })
      }
        tabBarOptions={{
          activeTintColor: '#00CFFF',
          inactiveTintColor: 'gray',
         style:{ backgroundColor:"#FFF"}
        }}
        >
        <Tab.Screen name="Order History" component={History}/>
        <Tab.Screen name="Current Orders" component={Current}/>
        </Tab.Navigator>
    )
}