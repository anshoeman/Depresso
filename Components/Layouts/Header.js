import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
export default function HeaderBar() {
  return (
    <View>
      {/* <Pressable>
        <TouchableOpacity onPress={() => auth().signOut()}>
          <Text style={styles.Logout}>Logout</Text>
        </TouchableOpacity>
      </Pressable> */}
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          style: { color: "#fff" },
        }}
        centerContainerStyle={{}}
        containerStyle={{ width: "100%" }}
        leftContainerStyle={{}}
        placement="center"
        // rightComponent={{
        //   icon: (
        //       <Icon name="home" size={30}/>
        //   ),
        //   color: "#fff",
        // }}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
    </View>
  );
}

// import * as React from "react";
// import { Header, Icon } from "@rneui/base";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default () => {
//   return (
//     <Header
//       backgroundImageStyle={{}}
//       barStyle="default"
//       centerComponent={{
//         text: "MY TITLE",
//         style: { color: "#fff" }
//       }}
//       centerContainerStyle={{}}
//       containerStyle={{ width: 350 }}
//       leftComponent={{ icon: "menu", color: "#fff" }}
//       leftContainerStyle={{}}
//       linearGradientProps={{}}
//       placement="center"
//       rightComponent={{ icon: "home", color: "#fff" }}
//       rightContainerStyle={{}}
//       statusBarProps={{}}
//     />
//   );
// }
