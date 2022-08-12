import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";

const Favorite = () => {
  const [test, setTest] = useState(true);

  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return test ? (
    <View style={styles.container}>
      <Text style={styles.infotext}>Still did not found your favorites </Text>
      <Text style={styles.infotext}>🙄</Text>
    </View>
  ) : (
    // <ScrollView >
    <View style={styles.wrapper}>
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => Math.random().toString()}
        renderItem={() => <FavoriteItem />}
      />
    </View>
    // </ScrollView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  infotext: {
    fontSize: 15,
    marginBottom: 10,
  },
});
