import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
export default function MusicCard({ key, title, Genre, Artist }) {
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
        name: title,
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
        `${title} was added in the queue for the time ${new Date(
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
  console.log(Genre.map((x) => console.log(x)));
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
          <Button title="Schedule" onPress={scheduleSession} color="black" />
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
