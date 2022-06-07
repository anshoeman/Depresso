// //do adb reverse tcp:5000 tcp:5000(only if it still doesnt work)....
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
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
