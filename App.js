import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Favorite from "./screens/Favorite";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ColorDetail from "./components/Color/ColorDetail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen name="color" component={ColorDetail} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "#000",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="homeTab"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="home" size={size} color={color} />;
            },
          }}
          component={HomeStackNavigation}
        />
        <Tab.Screen
          name="favorite"
          options={{
            title: "My Favorite",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons
                  name="favorite-outline"
                  size={size}
                  color={color}
                />
              );
            },
          }}
          component={Favorite}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
