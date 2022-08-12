import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const dummyData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1659042590952-0ae4506aec55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1659030320611-9d23ca40e29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1659124172725-104c5d01ba71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1659034638032-3a0e9b7ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1659034637688-5f67d1c6b8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1658965766600-baad7be330f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
  },
];

const Category = () => {
  return (
    <View>
      <Text style={styles.category}>Category 🗃️</Text>
      <FlatList
        data={dummyData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <CategoryItem imgUrl={itemData.item.url} />}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    fontSize: 20,
    fontWeight: "500",
  },
});
