/*
schedule session button screen
*/
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import PushNotification from "react-native-push-notification";
import { Card } from "react-native-elements";
export default function MusicCard({ key, title, Genre, Artist }) {
  const [notification, setNotification] = useState(true);
  const [song, setSong] = useState();
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: "test",
      channelName: "test",
    });
  };
  useEffect(() => {
    createChannel();
  }, []);
  const handleNotification = () => {
    if (notification === true) {
      PushNotification.localNotification({
        channelId: "test",
        title: `${title}`,
        message: `${title} was added for your session`,
      });
      setNotification(false);
      /*Here We Will Call The Post API as an Array*/
      /*API will be called once*/
    } else {
      PushNotification.localNotification({
        channelId: "test",
        title: `${title}`,
        message: `${title} is Already Scheduled`,
      });
    }
  };
  /*API Post For song name*/
  /*
  1. call the api based on the input(name of song)
  2. it will recommend you(the similar song)
  3. so my schedule session screen should be dynamic 
  */
  return (
    <View>
      <Card key={key}>
        <Card.Title>{title}</Card.Title>
        <Text
          style={{
            display: "flex",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#ADD8E6",
            width: "50%",
            borderRadius: 50,
          }}
        >
          #{Artist}
        </Text>
        <Text> </Text>
        <TouchableOpacity>
          <Button title="Schedule" onPress={handleNotification} color="black" />
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
});
