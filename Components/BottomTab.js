import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"/>
      <Tab.Screen name="Settings"/>
    </Tab.Navigator>
  )
}