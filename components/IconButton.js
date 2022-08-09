import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

const IconButton = ({ name, size, color, onPress }) => {
  const auth = useContext(AuthContext);
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
      <Text>{auth.token}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
