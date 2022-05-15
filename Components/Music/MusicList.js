import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

import object from "./data";
import MusicCard from "./MusicCard";
export default function MusicList() {
  /*Schedule Function*/
  return (
    <ScrollView>
      {object.map((x) => {
        return <MusicCard key={x.id} song={x.song} genre={x.genre} />;
      })}
    </ScrollView>
  );
}
