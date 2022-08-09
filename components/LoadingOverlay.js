import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import Color from "../constants/color";

const LoadingOverlay = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
