import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./BottomNavigationScreen/AuthStackScreen";
import AnalyticsStackScreen from "./BottomNavigationScreen/AnalyticsStackScreen";
const Tab = createBottomTabNavigator();

export default function BottomNavigationTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="auth" component={AuthStackScreen} />
        <Tab.Screen name="analytics" component={AnalyticsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
