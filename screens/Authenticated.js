import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View, Image, Button,ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";
import Profile from "../Components/Layouts/Profile";
import HeaderBar from "../Components/Layouts/Header";
import axios from "axios";

export default function Authenticated({ navigation }) {
  const user = auth().currentUser;
  const singOut = () => {
    auth().signOut();
  };
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   fetch("http://192.168.36.249")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);


  const [data, setData] = useState({
    predict: " ",
  });
  function getData() {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/",
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
  getData();
  useEffect(() => {
    fetch("http://127.0.0.1:5000/").then((res) =>
      res.json().then((data) => {
        setData({
          predict1: data.prediction1,
          predict2: data.prediction2,
          //array of index is in form of a string, not able to separate the values so manual fetch for each prediction
        });
      })
    
    );
  }, []);
  

  return (
    <ScrollView>
      <HeaderBar logout={singOut} user={user} />
      <Profile user={user} navigation={navigation} />
      
      <Text>{data.predict1}</Text>
      <Text>{data.predict2}</Text>
      {/* find a way to loop through this */}
      
            
           
          
     
    </ScrollView>
    
  );
}
