import React, { useState } from "react";
import { View, Text } from "react-native";
import Sound from "react-native-sound";

Sound.setCategory("Playback");

const Schedule = () => {
  const [music, setMusic] = useState(null);
  const ScheduledSong = new Sound("song_1.mp3", Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(ScheduledSong.getDuration());
  });

  return (
    <View>
      <Text>Music</Text>
    </View>
  );
};

export default Schedule;
