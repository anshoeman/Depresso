import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
export default function Header() {
  return (
    <View style={styles.Header}>
      <Pressable>
        <TouchableOpacity>
          <Text style={styles.Logout}>Logout</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    position: "absolute",
    width: 360,
    top: -1,
    left: 0,
    height: 59,
    backgroundColor: "#F2EFE9",
  },
  Hamburger: {
    position: "absolute",
    width: 48,
    height: 44,
    left: 8,
    top: 5,
  },
  Logout: {
    position: "absolute",
    width: 75,
    height: 26,
    left: 272,
    top: 14,
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
});
