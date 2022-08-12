import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ColorItem from "./ColorItem";

const dummyData = [
  {
    id: 1,
    color: "#fe938c",
    name: "Red",
  },
  {
    id: 2,
    color: "#5d2a42",
    name: "Brown",
    // name: "Light Purple",
  },
  {
    id: 3,
    color: "#495867",
    name: "Dark Gray",
  },
  {
    id: 4,
    color: "#7678ed",
    name: "Purple",
  },
  {
    id: 5,
    color: "#ffc857",
    name: "Yellow",
  },

  {
    id: 7,
    color: "#d7c0d0",
    name: "Light Purple",
  },
  {
    id: 8,
    color: "#76b041",
    name: "Green",
  },
  {
    id: 9,
    color: "#7bdff2",
    name: "Sky Blue",
  },
];

const Color = () => {
  return (
    <View>
      <Text style={styles.color}>Color 🌈</Text>
      <FlatList
        data={dummyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ColorItem name={itemData.item.name} color={itemData.item.color} />
        )}
      />
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  color: {
    fontSize: 20,
    fontWeight: "500",
  },
});
