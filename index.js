import { registerRootComponent } from "expo";
import App from "./App";
import TrackPlayer from "react-native-track-player";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// This needs to go right after you register the main component of your app
// AppRegistry.registerComponent(...)
TrackPlayer.registerPlaybackService(() => require("./service"));
