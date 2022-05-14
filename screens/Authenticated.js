import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import Header from "../Components/Header";
import { NavigationContainer } from '@react-navigation/native';
export default function Authenticated() {
  const currentHour = new Date().getHours();
  const user = auth().currentUser;
  return (
    <NavigationContainer>
     <Header/>
    </NavigationContainer>
  );
}

