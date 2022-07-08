import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Card, Button, Avatar } from "react-native-elements";
export default function Profile({ user, navigation }) {
  return (
    <View
      style={styles.mainContainer}
    >
      <Card
        containerStyle={{
          height: 200,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar
            size={100}
            rounded
            source={{ uri: user?.photoURL }}
            title={user?.displayName[0]}
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory
              size={30}
              onPress={() => navigation.navigate("edit")}
            />
          </Avatar>
          <Button
            title="Schedule Session"
            buttonStyle={{ width: 200 }}
            containerStyle={{ margin: 25 }}
            onPress={() => navigation.navigate("musicScreen")}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
  }
})
