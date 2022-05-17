import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import MyTabs from "../Navigation/BottomNavigation/BottomNavgation";
export default function Profile({ user, navigation }) {
  
  return (
    <View>
      <Image source={{ uri: user?.photoURL }} style={styles.Image} />
      <Text style={styles.username}>{user?.displayName}{ }</Text>
      <Pressable onPress={() => navigation.navigate("musicScreen")}>
        <View style={styles.session}>
          <View>
            <Icon
              name="musical-note"
              color="white"
              style={styles.IconMusic}
              size={26}
            />
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 13,
                fontSize: 17,
                fontWeight: "100",
              }}
            >
              My Music Sessions
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    position: "absolute",
    width: 171,
    height: 168,
    left: 94,
    top: 81,
    borderRadius: 98,
  },
  username: {
    position: "absolute",
    width: 244,
    height: 37,
    left: 63,
    top: 260,
    fontFamily: "Red Hat Display",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 17 ,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  greet: {
    position: "absolute",
    width: 244,
    height: 37,
    // left: 63,
    textAlign:'center',
    top: 290,
    fontFamily: "Red Hat Display",
    fontWeight: "900",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  session: {
    position: "absolute",
    width: 346,
    height: 52,
    left: 8,
    top: 348,
    backgroundColor: "#000000",
    borderRadius: 30,
  },
  IconMusic: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 20,
    top: 12,
  },
});
