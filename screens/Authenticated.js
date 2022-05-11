import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import Header from "../Components/Header";
import { Circle } from "react-native-svg";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default function Authenticated() {
  const currentHour = new Date().getHours();
  const user = auth().currentUser;
  return (
    <View style={styles.Headers}>
      <Header />
      <View style={styles.userStyles}>
        <Image source={{ uri: user?.photoURL }} style={styles.image} />
        <Text style={{ marginTop: 30, fontWeight: "800" }}>Followers{" "} 0</Text>
        <Text style={{ marginTop: 30, fontWeight: "800" }}>Followings{" "} 0</Text>
      </View>
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
      <View style={[styles.sessionCard, styles.shadowProps]}>
        <AnimatedCircularProgress
  style={{textAlign:"center",marginTop:27,marginLeft:10}}
  size={120}
  width={10}
  fill={70}
  tintColor="black"
  backgroundColor="white"
  padding={10}
  renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="5" fill="grey" />}>
  {
    (fill) => (
      <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>
        { fill }
      </Text>
    )
  }
        </AnimatedCircularProgress>
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
  sessionCard: {
    marginLeft: 20,
    marginTop: 20,
    height:180,
    backgroundColor: "#a4b6bf",
    width: 150,
    borderRadius: 20,
  },
  shadowProps: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  userStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around"
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
