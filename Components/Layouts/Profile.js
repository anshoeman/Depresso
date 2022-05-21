import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React,{useEffect} from "react";
import { Button } from "react-native-elements";
import Scheduled from "../Music/ScheduledMusicSession";
import Play from "../MusicApp/play";

export default function Profile({ user, navigation }) {

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
      <Scheduled />
      <Play/>
    </View>
  );
}



