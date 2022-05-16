import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
export default function MusicCard({ key, song, genre }) {
  const sessionData = [];
  var minutesToAdd = 120;
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
  /*Array Part*/
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const scheduleSession = () => {
    if (flag === false) {
      sessionData.unshift({
        name: genre,
        id: Math.random(),
        date: new Date(futureDate).toLocaleTimeString("en", {
          timeStyle: "short",
          hour12: false,
          timeZone: "UTC",
        }),
      });
      setFlag(true);
      console.log(sessionData);
      alert(
        `${genre} was added in the queue for the time ${new Date(
          futureDate
        ).toLocaleTimeString("en", {
          timeStyle: "short",
          hour12: false,
          timeZone: "UTC",
        })}`
      );
    } else {
      console.log("Song Already Added In Queue");
      setError(true);
      alert("song already added");
    }
  };

  return (
    <View>
      <Card key={key}>
        <Card.Title>{genre}</Card.Title>
        <Card.Divider />
        <Button title="Schedule" onPress={scheduleSession} />
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
