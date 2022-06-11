import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Sound from "react-native-sound";
import { Card, Button } from "react-native-elements";
Sound.setCategory("Playback");
/*get scheduled song name with API*/
const Schedule = () => {
  const ScheduledSong = new Sound("song_1.mp3", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error);
      return;
    }
  });
  const [music, setMusic] = useState(ScheduledSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const MusicSessionHandler = () => {
    console.log(streak, "Schedule Song" + music);
    let currentState = isPlaying;
    if (currentState) music.pause();
    else music.play();
    setIsPlaying(!isPlaying);
  };
  console.log(ScheduledSong.getDuration());
  return (
    <View>
      <Card>
        <Card.Title>DANCE MONKEY</Card.Title>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={MusicSessionHandler}
        />
      </Card>
    </View>
  );
};

export default Schedule;
