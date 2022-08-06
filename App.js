import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpense from "./screens/AllExpense";
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/Recentexpense";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/Ui/IconButton";
import ExpenseContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const ButtonTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <ButtonTab.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: "white",
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          );
        },
      })}
    >
      <ButtonTab.Screen
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
        name="RecentExpenses"
        component={RecentExpense}
      />
      <ButtonTab.Screen
        options={{
          title: "Home",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
        name="AllExpense"
        component={AllExpense}
      />
    </ButtonTab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        options={{
          headerShown: false,
        }}
        component={TabNavigation}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ExpenseContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
