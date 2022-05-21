import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Sound from "react-native-sound";
export default function Play() {
  const [music, setMusic] = useState(null);
  const [flag, setFlag] = useState(false);
  const [playing, setPlaying] = useState();
  const name = "song_1";
  let song = new Sound(`${name}.mp3`, Sound.MAIN_BUNDLE, (err) => {
    if (err) {
      console.log(err, "err");
      return;
    }
  });
  const play = () => {
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
      <Text>play</Text>
      <Button title="play" onPress={play} />
    </View>
  );
}