import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./BottomNavigationScreen/AuthStackScreen";
import AnalyticsStackScreen from "./BottomNavigationScreen/AnalyticsStackScreen";
import Authenticated from "../../../screens/Authenticated";
import Analytics from "../../../screens/Analytics";
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function BottomNavigationTab() {
  return (
    <Tab.Navigator screenOptions={({route}) =>({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color = 'black'
        size = 25
        if (route.name === 'Home')
        {
          iconName = 'home'
        }
        else if(route.name==='Analytics') {
          iconName = 'analytics'
        }
     
        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown:false
      })}>
        <Tab.Screen name="Home" component={Authenticated} />
        <Tab.Screen name="Analytics" component={Analytics} />
      </Tab.Navigator>
  );
}
