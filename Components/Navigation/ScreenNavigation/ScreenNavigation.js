import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authenticated from "../../../screens/Authenticated";
import MusicList from "../../Music/MusicList";
const Stack = createNativeStackNavigator();
const AuthScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="authenticated"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="authenticated" component={Authenticated} />
        <Stack.Screen name="music" component={MusicList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthScreenNavigation;
