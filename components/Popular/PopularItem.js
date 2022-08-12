import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PopularItem = ({ imgUrl }) => {
  return (
    <View>
      <Image
        style={styles.popularImg}
        source={{
          uri: imgUrl,
        }}
      />
    </View>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  popularImg: {
    marginVertical: 20,
    width: 160,
    height: 250,
    borderRadius: 10,
    marginRight: 10,
  },
});
