import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "../components/Search/Search";
import Popular from "../components/Popular/Popular";
import Category from "../components/Category/Category";
import Color from "../components/Color/Color";

const Home = () => {
  return (
    <ScrollView style={styles.root}>
      <View>
        <Text style={styles.welcome}>👋 Hi, Welcome from </Text>
        <Text style={styles.logo}>DatPone</Text>
        <Search />
      </View>
      <View>
        <Popular />
        <Category />
        <Color />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
