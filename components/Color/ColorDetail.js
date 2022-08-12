import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ColorTitle = ({ color, name }) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.colorTitle, { backgroundColor: color }]}></View>
      <Text>{name}</Text>
    </View>
  );
};

const ColorDetail = ({ route, navigation }) => {
  let colorCode = route.params.colorCode ? route.params.colorCode : "#e2e2";
  let name = route.params.name ? route.params.name : "Unknown";
  console.log(route.params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="keyboard-arrow-left"
          size={30}
          color="black"
        />
      ),
      headerTitle: () => <ColorTitle color={colorCode} name={name} />,
    });
  }, [navigation, name, colorCode]);

  return (
    <View>
      <Text>ColorDetail</Text>
    </View>
  );
};

export default ColorDetail;

const styles = StyleSheet.create({
  colorTitle: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});