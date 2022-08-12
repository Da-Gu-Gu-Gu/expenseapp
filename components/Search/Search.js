import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchIcon from "./SearchIcon";

const Search = () => {
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} placeholder={"Search..."} />
      <SearchIcon />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    padding: 10,
    borderRadius: 10,
  },
});
