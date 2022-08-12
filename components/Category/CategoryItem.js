import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ imgUrl }) => {
  return (
    <View style={styles.categoryItem}>
      <ImageBackground
        style={styles.categoryImg}
        source={{
          uri: imgUrl,
        }}
      >
        <Text style={styles.categoryTitle}>CategoryItem</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    marginVertical: 20,
    marginRight: 10,
    width: 200,
    height: 120,
    borderRadius: 12,
    flex: 1,
    overflow: "hidden",
    backgroundColor: "red",
  },
  categoryImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  categoryTitle: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});
