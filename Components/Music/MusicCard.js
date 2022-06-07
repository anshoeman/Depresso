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
import {
  onClickHandleNotification,
  createChannels,
} from "./MusicServices/MusicNotification";

export default function MusicCard() {
  const [music, setMusic] = useState([]);
  function fetchDataJSON() {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => {
        setMusic(data.prediction);
      });
  }
  useEffect(() => {
    fetchDataJSON();
    createChannels();
  }, []);

  return (
    <ScrollView>
      {music.map((x, i) => {
        return (
          <Card key={i}>
            <Card.Title>{x}</Card.Title>
            <Button
              title="Schedule"
              onPress={() => onClickHandleNotification()}
            />
          </Card>
        );
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
