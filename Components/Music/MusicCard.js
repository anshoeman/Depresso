import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";
export default function MusicCard() {
  const [music, setMusic] = useState([]);
  function fetchDataJSON() {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.prediction)
        setMusic(data.prediction)
      });
  }
  // console.log(music);
  useEffect(() => {
    fetchDataJSON();
  },[]);
  return (
    <ScrollView>
      {music.map((x) => {
        return(
          <Card>
            <Card.Title>{x}</Card.Title>
            <Button title="Schedule"/>
         </Card>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
});
