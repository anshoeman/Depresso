import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button,ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";
import Profile from "../Components/Layouts/Profile";
import HeaderBar from "../Components/Layouts/Header";
import axios from "axios";

export default function Authenticated({ navigation }) {
  const user = auth().currentUser;
  const singOut = () => {
    auth().signOut();
  };
  const [data, setData] = useState({
    predict: " ",
  });
  function getData() {
    axios({
      method: "GET",
      url: "/x",
    })
      .then((response) => {
        const res = response.data
        setData(({
          predict: res.prediction,
        
        }))
        console.log(predict);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
  }
  // useEffect(() => {
  //   fetch("/x").then((res) =>
  //     res.json().then((data) => {
  //       setData({
  //         predict: data.prediction,
  //       });
  //     })
    
  //   );
  // }, []);
  getData
  return (
    <ScrollView>
      <HeaderBar logout={singOut} user={user} />
      <Profile user={user} navigation={navigation} />
      <Text>{data.predict}</Text>
    </ScrollView>
    
  );
}
