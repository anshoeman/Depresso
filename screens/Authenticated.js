import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button,ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";
import Profile from "../Components/Layouts/Profile";
import HeaderBar from "../Components/Layouts/Header";

export default function Authenticated({ navigation }) {
  const user = auth().currentUser;
  const singOut = () => {
    auth().signOut();
  };
  return (
    <ScrollView>
      <HeaderBar logout={singOut} user={user} />
      <Profile user={user} navigation={navigation} />
    </ScrollView>
  );
}
