import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authenticated from "../Authenticated";
const { Navigator, Screen } = createNativeStackNavigator();
import MusicCard from "../../Components/Music/MusicCard";
export default function Navigate() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="authenticated"
      >
        <Screen name="authenticated" component={Authenticated} />
        <Screen name="music" component={MusicCard} />
      </Navigator>
    </NavigationContainer>
  );
}
