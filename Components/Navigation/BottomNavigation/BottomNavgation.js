import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Authenticated from "../../../screens/Authenticated";
import Analytics from "../../../screens/Analytics";
import Feeds from "../../../screens/Feeds";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Schedule from "../../../screens/Schedule";
const Tab = createBottomTabNavigator();

export default function BottomNavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = "black";
          size = 25;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Analytics") {
            iconName = "analytics";
          } else if (route.name === "Feeds") {
            iconName = "feed";
            return <FontAwesome name={iconName} size={size} />;
          } else if (route.name === "Schedule") {
            iconName = "schedule";
            return <MaterialIcons name={iconName} size={size} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Authenticated} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
}
