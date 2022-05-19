import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React,{useEffect} from "react";
import { Button } from "react-native-elements";
import Scheduled from "../Music/ScheduledMusicSession";
import TrackPlayer from "react-native-track-player";
const tracks = [
  {
    id: 1,
    url: 'https://sample-music.netlify.app/death%20bed.mp3',
    title: "Blues Beat"
  },
];
export default function Profile({ user, navigation }) {

  // TrackPlayer.updateOptions({
  //   stopWithApp: false,
  //   capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  //   compactCapabilities: [
  //     TrackPlayer.CAPABILITY_PLAY,
  //     TrackPlayer.CAPABILITY_PAUSE,
  //   ],
  // });

  // const setUpTrackPlayer = async () => {
  //   try {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.add(tracks);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async() =>{
      console.log('add songs');
      await TrackPlayer.add(tracks);
      TrackPlayer.play();
    })
  }, []);

  return (
    <View>
      <Image source={{ uri: user?.photoURL }} />
      <Text>{user?.displayName}</Text>
      {/* <Pressable onPress={() => navigation.navigate("musicScreen")}> */}
      {/* <Button
        onPress={() => navigation.navigate("musicScreen")}
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        title="Music Session"
        color="black" /> */}
      
      {/* </Pressable> */}
      {/* <Button
      buttonStyle={{ width: 150 }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      linearGradientProps={null}
      icon={<Icon name="react" size={15} color="#0FF" />}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={() => alert("click")}
      title="Hello"
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    /> */}
    <Scheduled/>
    </View>
  );
}



