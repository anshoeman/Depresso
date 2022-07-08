import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Card } from "react-native-elements";
import PushNotification from "react-native-push-notification";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}; //return Promise
export default function MusicCard() {
  const [music, setMusic] = useState([]);
  const [isScheduled, setIsScheduled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: "React-native-test-id",
      channelName: "React-native-test-name",
    });
  };

  const onClickHandleNotification = () => {
    if (isScheduled) {
      //POST api for sending the name of the song #1
      PushNotification.localNotification({
        channelId: "React-native-test-id",
        title: "DepressoNot Already Scheduled The Session",
        message: "Session Was Already Added In Queue",
        id: 1,
      });
    } else {
      PushNotification.localNotification({
        channelId: "React-native-test-id",
        title: "DepressoNot Music Session",
        message: "Session Was Added In Queue",
        id: 1,
      });
      setIsScheduled(true);
    }
  };
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
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
