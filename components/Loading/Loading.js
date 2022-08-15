import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = ({ color }) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={"large"} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
