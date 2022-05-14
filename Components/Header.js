import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import BottomTab from "./BottomTab";
import Icon from "react-native-vector-icons/Entypo";
export default function Header({logout}) {

  return (
    <View style={styles.Headers}>
      <Pressable>
        <TouchableOpacity onPress={()=>auth().signOut()}>
          <Text style={styles.Logout}>Logout</Text>
        </TouchableOpacity>
      </Pressable>
      <View style={styles.Menu}>
        <Icon name="menu" size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Headers: {
    position: "absolute",
    width: "100%",
    height: 59,
    left: 0,
    top: -1,
    backgroundColor: "#F2EFE9",
  },
  Logout: {
    position: "absolute",
    width: 75,
    height: 26,
    left: 272,
    top: 14,
    fontFamily:"san-serif",
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: 17,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  Menu: {
    position: "absolute",
    left: 8,
    top: 11,
  },
});
