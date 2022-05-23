import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Card, Button, Avatar } from "react-native-elements";
export default function Profile({ user, navigation }) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
      }}
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
            title="Bj"
            containerStyle={{ backgroundColor: "grey" }}
          >
            <Avatar.Accessory
              size={30}
              onPress={() => navigation.navigate("edit")}
            />
            {/*Edit page*/}
          </Avatar>
          {/* <Text> </Text> */}
          <Button
            title="My Music Session"
            buttonStyle={{ width: 200 }}
            // icon={<FontAwesome name="music" size={20} color="white"/>}
            // iconRight
            containerStyle={{ margin: 25 }}
            onPress={() => navigation.navigate("musicScreen")}
          />
        </View>
      </Card>
    </View>
  );
}

// import * as React from "react";
// import { Button } from "@rneui/base";
// import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
// import LinearGradient from "react-native-linear-gradient";

// export default () => {
//   return (
//     <Button
//       buttonStyle={{ width: 150 }}
//       containerStyle={{ margin: 5 }}
//       disabledStyle={{
//         borderWidth: 2,
//         borderColor: "#00F"
//       }}
//       disabledTitleStyle={{ color: "#00F" }}
//       linearGradientProps={null}
//       icon={<Icon name="react" size={15} color="#0FF" />}
//       iconContainerStyle={{ background: "#000" }}
//       loadingProps={{ animating: true }}
//       loadingStyle={{}}
//       onPress={() => alert("click")}
//       title="Hello"
//       titleProps={{}}
//       titleStyle={{ marginHorizontal: 5 }}
//     />
//   );
// }

// import * as React from "react";
// import { Button } from "@rneui/base";
// import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
// import LinearGradient from "react-native-linear-gradient";

// export default () => {
//   return (
//     <Button
//       buttonStyle={{ width: 150 }}
//       containerStyle={{ margin: 5 }}
//       disabledStyle={{
//         borderWidth: 2,
//         borderColor: "#00F"
//       }}
//       disabledTitleStyle={{ color: "#00F" }}
//       linearGradientProps={null}
//       icon={<Icon name="react" size={15} color="#0FF" />}
//       iconContainerStyle={{ background: "#000" }}
//       iconRight
//       loading
//       loadingProps={{ animating: true }}
//       loadingStyle={{}}
//       onPress={() => alert("click")}
//       title="Hello"
//       titleProps={{}}
//       titleStyle={{ marginHorizontal: 5 }}
//     />
//   );
// }
