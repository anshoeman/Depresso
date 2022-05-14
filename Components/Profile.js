import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Profile({ user }) {
  return (
    <View>
          <Image source={{ uri: user?.photoURL }} style={styles.Image} />
          <Text style={styles.username}>{user?.displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    position: "absolute",
    width: 171,
    height: 168,
    left: 94,
    top: 81,
    borderRadius: 98,
  },
  username: {
    position: "absolute",
    width: 244,
    height: 37,
    left: 63,
    top: 260,
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 21,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
});
