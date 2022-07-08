import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Sound from "react-native-sound";
import { Card, Button } from "react-native-elements";
import { Slider } from "react-native-elements";
Sound.setCategory("Playback");

const Schedule = () => {
  
  const ScheduledSong = new Sound("song_1.mp3", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error);
      return;
    }
  });
  const [music, setMusic] = useState(ScheduledSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const MusicSessionHandler = () => {
    let currentState = isPlaying;
    if (currentState) music.pause();
    else {
      music.play();
      ScheduledSong.getCurrentTime((seconds, isPlay) =>
        console.log(seconds, isPlay)
      );
    }
    setIsPlaying(!isPlaying);
    setDuration(ScheduledSong.getDuration());
  };

  return (
    <View>
      <Card>
        <Card.Title>DANCE MONKEY</Card.Title>
        <Slider
          thumbStyle={{ height: 10, width: 10, backgroundColor: "black" }}
          allowTouchTrack={true}
        />
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={MusicSessionHandler}
        />
      </Card>
    </View>
  );
};

export default Schedule;
