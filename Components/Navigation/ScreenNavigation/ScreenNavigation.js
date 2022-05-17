import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authenticated from "../../../screens/Authenticated";
import MusicList from "../../Music/MusicList";
import BottomNavigationTab from "../BottomNavigation/BottomNavgation";
const Stack = createNativeStackNavigator();
const AuthScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="authenticated"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="bottomNavigation" component={BottomNavigationTab} />
        <Stack.Screen name="musicScreen" component={MusicList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthScreenNavigation;
