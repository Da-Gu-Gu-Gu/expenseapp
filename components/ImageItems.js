import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageItems = ({ image }) => {
  return (
    <View style={styles.imageitem}>
      <Image source={{ uri: image.url }} style={styles.image} />
    </View>
  );
};

export default ImageItems;

const styles = StyleSheet.create({
  imageitem: {
    flex: 1,
    height: 350,
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
