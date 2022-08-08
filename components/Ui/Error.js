import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import Button from "./Button";

const Error = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.hrtitlegyi, styles.text]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: COLORS.secondary,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  hrtitlegyi: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
