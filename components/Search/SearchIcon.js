import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchIcon = () => {
  return (
    <Pressable style={styles.iconWrapper}>
      <Ionicons name="search" size={24} color="#66666e" />
    </Pressable>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  iconWrapper: {
    marginLeft: 10,
    backgroundColor: "#e2e2e2",
    padding: 10,
    borderRadius: 12,
  },
});
