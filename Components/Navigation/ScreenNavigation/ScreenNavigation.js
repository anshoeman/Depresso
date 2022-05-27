import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicList from "../../Music/MusicList";
import BottomNavigationTab from "../BottomNavigation/BottomNavgation";
import EditProfile from "../../../screens/EditProfile";
import Graph from "../../../screens/Graph";
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
        <Stack.Screen name="edit" component={EditProfile} />
        <Stack.Screen name="Graph" component={Graph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthScreenNavigation;
