import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigationTab from "../BottomNavigation/BottomNavgation";
import EditProfile from "../../../screens/EditProfile";
import Graph from "../../../screens/Graph";
import ScreenTime from "../../../screens/ScreenTime";
import Progress from "../../../screens/Progress";
import MusicCard from "../../Music/MusicCard";
const Stack = createNativeStackNavigator();
const AuthScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="authenticated"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="bottomNavigation" component={BottomNavigationTab} />
        <Stack.Screen name="musicScreen" component={MusicCard} />
        <Stack.Screen name="edit" component={EditProfile} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="ScreenTime" component={ScreenTime} />
        <Stack.Screen name="CurrentProgress" component={Progress}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthScreenNavigation;
