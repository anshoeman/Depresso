import { registerRootComponent } from "expo";
import App from "./App";
import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";
//this function is called when notification is clicked
PushNotification.configure({
  onNotification: function (notification) {
    console.log("Notification", notification);
    },
    requestPermissions:Platform.OS === 'ios'
})

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// This needs to go right after you register the main component of your app
// AppRegistry.registerComponent(...)

