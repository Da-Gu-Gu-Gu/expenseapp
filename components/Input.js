import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Color from "../constants/color";

const Input = ({ name, type, handler }) => {
  return (
    <View style={styles.inputwrapper}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={type === "default" ? true : false}
        keyboardType={type}
        onChangeText={handler}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputwrapper: {
    marginVertical: 12,
  },
  label: {
    color: Color.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: Color.info,
  },
});
