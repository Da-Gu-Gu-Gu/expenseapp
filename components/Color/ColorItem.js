import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ColorItem = ({ color, name }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("color", {
          colorCode: color,
          name: name,
        })
      }
      style={[styles.colorItem, { backgroundColor: color }]}
    ></Pressable>
  );
};

export default ColorItem;

const styles = StyleSheet.create({
  colorItem: {
    marginVertical: 24,
    marginRight: 10,
    backgroundColor: "#d33f49",
    width: 50,
    height: 50,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 12,
  },
});
