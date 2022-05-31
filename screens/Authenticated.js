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
/*Middleware and save the user API */
export default function Authenticated({ navigation }) {
  /*
  const[state,setS]
  */
  const user = auth().currentUser;
  const singOut = () => {
    auth().signOut();
  };
  // const [data, setData] = useState({
  //   predict: " ",
  // });

  // //do adb reverse tcp:5000 tcp:5000(only if it still doesnt work)....
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/").then((res) =>
  //     res.json().then((data) => {
  //       console.log(data);
  //       setData({
  //         predict1: data.prediction1,
  //         predict2: data.prediction2,
  //         //array of index is in form of a string, not able to separate the values so manual fetch for each prediction
  //       });
  //     })
  //   );
  // }, []);
  
  return (
    <ScrollView>
      <HeaderBar logout={singOut} user={user} />
      <Profile user={user} navigation={navigation} />
    </ScrollView>
  );
}
