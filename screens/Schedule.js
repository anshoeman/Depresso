import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Sound from "react-native-sound";
import { Card } from "react-native-elements";
import { Slider } from "react-native-elements";
/*Get Api For The Scheduled Songs*/
export default function Play() {
  const [music, setMusic] = useState(null);
  const [flag, setFlag] = useState(false);
  const [playing, setPlaying] = useState();
  /*from data get this*/

  const name = "song_1";
  let song = new Sound(`${name}.mp3`, Sound.MAIN_BUNDLE, (err) => {
    if (err) {
      console.log(err, "err");
      return;
    }
  });

  const PlayScheduledSong = () => {
    if (song.isPlaying()) {
      song.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      song.play((success) => {
        if (success) {
          setPlaying(false);
          console.log("successfully finished playing");
        } else {
          setPlaying(false);
          console.log("playback failed due to audio decoding errors");
        }
      });
    }
  };


  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", padding: 20 }}>Your Scheduled Session</Text>
      <Card>
        <Card.Title>Dance Monkey</Card.Title>
        <Button title="Play" onPress={PlayScheduledSong}/>
      </Card>
      <Slider/>
    </View>
  )
}
