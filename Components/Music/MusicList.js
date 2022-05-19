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
        const { aTitle, Artist, Id, Genres } = x;
        return (
          <View>
            <MusicCard
              key={Id}
              title={aTitle}
              Artist={Artist}
              Genre={[Genres]}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
