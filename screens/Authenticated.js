import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import Header from "../Components/Header";
export default function Authenticated() {
  const currentHour = new Date().getHours();
  const user = auth().currentUser;
  return (
    <View style={styles.Headers}>
      <Header />
      <Image source={{ uri: user?.photoURL }} style={styles.image} />
      <View style={styles.HeadersText}>
        <Text style={styles.text}>Welcome {user?.displayName}</Text>
        <Text style={{fontWeight:"200"}}>
          We Wish You A Hearty{" "}
          {currentHour >= 12 && currentHour <= 17
            ? "Good Afternoon!"
            : currentHour >= 0 && currentHour < 12
            ? "Good Morning!"
            : "Good Evening!"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Headers: {
    flex: 1,
    flexDirection: "column",
  },
  HeadersText: {
    marginLeft: 17,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    marginBottom: 30,
  },
  image: {
    height: 70,
    width: 70,
    marginLeft: 17,
    borderRadius: 150,
    marginBottom: 12,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Radio Canada, sans-serif",
    fontWeight: "bold",
  },
});
