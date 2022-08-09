import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import color from "./constants/color";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";
import Welcome from "./screens/Welcome";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const Auth = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: color.info,
        },
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  const Auth = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: color.info,
        },
      }}
    >
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              name="exit"
              size={24}
              color={tintColor}
              onPress={() => Auth.logout()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const Auth = useContext(AuthContext);

  console.log(">>>>>>>");
  console.log(Auth.token ? "good" : "back");

  const [validuser, setValiduser] = useState(false);
  // console.log(Auth.isAuthenticated);
  console.log(validuser);
  useEffect(() => {
    const getToken = async () => {
      const storeToken = await AsyncStorage.getItem("token");
      if (storeToken) {
        setValiduser(true);
      }
    };
    getToken();
  }, [AsyncStorage]);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <WelcomeStack /> */}
        {!validuser && <LoginStack />}
        {validuser && <WelcomeStack />}
      </NavigationContainer>
    </AuthContextProvider>
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
