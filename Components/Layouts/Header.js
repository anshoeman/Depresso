import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React,{useState} from "react";
import auth from "@react-native-firebase/auth";
import { Button } from "react-native-elements";
export default function HeaderBar({ user }) {
  // const [userstreak, setUserStreak] = useState(streak);
  // setUserStreak(streak);
  const myDate = new Date();
  const myHours = myDate.getHours();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, textAlign: "left", fontWeight: "bold" }}>
        Welcome {user?.displayName}
      </Text>
      <Text style={{ fontSize: 19, textAlign: "left", fontWeight: "100" }}>
        {myHours <= 17 && myHours >= 12
          ? "Good Afternoon"
          : myHours <= 12
          ? "Good Morning"
          : "Good Evening"}
      </Text>
      <View style={{ width: 180, marginTop: 15 }}>
        <Button title="Logout" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
}
