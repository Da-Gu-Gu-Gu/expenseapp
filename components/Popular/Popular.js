import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PopularItem from "./PopularItem";

const dummyData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1659846630088-db9d379f3b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1659726554533-e95d50367151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1659482023691-04d925fb35fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1659849025892-f9318988ad00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1641984790242-d8aa477d306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1659787050050-d5aa2b1ec0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
  },
];

const Popular = () => {
  return (
    <View>
      <Text style={styles.popular}>Popular now 🔥</Text>
      <FlatList
        data={dummyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <PopularItem imgUrl={itemData.item.url} />}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popular: {
    fontSize: 20,
    fontWeight: "500",
  },
});
