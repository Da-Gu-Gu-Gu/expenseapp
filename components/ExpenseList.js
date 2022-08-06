import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const renderExpItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpenseList = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={expenses}
        renderItem={renderExpItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
