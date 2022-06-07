import PushNotification from "react-native-push-notification";
const createChannels = () => {
  PushNotification.createChannel({
    channelId: "React-native-test-id",
    channelName: "React-native-test-name",
  });
};
const onClickHandleNotification = () => {
    //posting my music
  PushNotification.localNotification({
    channelId: "React-native-test-id",
    title: "DepressoNot Music Session",
    message: "Session Was Added In Queue",
    id: 1,
  });
};

export { createChannels, onClickHandleNotification };
