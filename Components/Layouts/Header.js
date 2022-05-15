import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/Entypo";
import { DrawerActions } from "@react-navigation/native";

export default function Header({navigation}) {
  return (
    <View style={styles.Headers}>
      <Pressable>
        <TouchableOpacity onPress={() => auth().signOut()}>
          <Text style={styles.Logout}>logout</Text>
        </TouchableOpacity>
      </Pressable>
      <View style={styles.Menu}>
        <Pressable onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={40} />
          </Pressable>
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
    fontFamily: "san-serif",
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
