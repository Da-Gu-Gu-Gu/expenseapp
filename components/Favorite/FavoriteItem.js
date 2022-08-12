import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FavoriteItem = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1658763440438-2391eba32774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
        }}
        style={styles.img}
      />
      <View style={styles.favcontent}>
        <Text style={styles.title}>FavoriteItem</Text>
        <Text style={styles.aurthor}>By Blah Blah</Text>
      </View>
      <View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    marginBottom: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  favcontent: {
    flex: 1,
    marginLeft: 20,
  },
  aurthor: {
    marginTop: 5,
  },
});
