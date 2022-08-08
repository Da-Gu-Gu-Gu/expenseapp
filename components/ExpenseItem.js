import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors";
import { getFormattedDate } from "../utils/dat";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    return navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  console.log("itemdate", date);
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    elevation: 3,
    shadowColor: COLORS.bg,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: COLORS.white,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: COLORS.info,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    textAlign: "center",
  },
  amount: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
