import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const [pushToken, setPushToken] = useState();

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted!");
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then((res) => {
        const token = res.data;
        setPushToken(token);
        // fetch('https://your-own-api.com/')
        console.log(data);
      })
      .catch((err) => null);
  }, []);

  useEffect(() => {
    const backgroundSub = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    const foregroundSub = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    return () => {
      foregroundSub.remove();
      backgroundSub.remove();
    };
  }, []);

  const notiHandler = () => {
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "My first Notification",
    //     color: "red",
    //     body: "This is the my first noti body test",
    //     data: {
    //       gg: "Some text fasfd ",
    //     },
    //   },
    //   trigger: {
    //     seconds: 10,
    //   },
    // });

    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "aplication/json",
        "Accept-Encoding": "gzip,deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: pushToken,
        data: { extraData: "Some data" },
        title: "This push notification",
        body: "This push notification was sent via the app!",
      }),
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Send Notification" onPress={notiHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
