import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

import object from "./Musicdata";
import MusicCard from "./MusicCard";

export default function MusicList({ navigation }) {
  return (
    <ScrollView>
      {object.map((x) => {
        return (
          <MusicCard
            key={x.id}
            song={x.song}
            genre={x.genre}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}
