import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import ImageList from "../ImageList";
import Loading from "../Loading/Loading";

const ColorTitle = ({ color, name }) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.colorTitle, { backgroundColor: color }]}></View>
      <Text>{name}</Text>
    </View>
  );
};

const ColorDetail = ({ route, navigation }) => {
  const [test, setTest] = useState(true);

  let colorCode = route.params.colorCode ? route.params.colorCode : "#e2e2";
  let name = route.params.name ? route.params.name : "Unknown";

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

  if (test) {
    return <Loading color={colorCode} />;
  }

  return (
    <View>
      <ImageList />
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
