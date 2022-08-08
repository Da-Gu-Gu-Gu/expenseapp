import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/Mangeexpense/ExpenseForm";

import Button from "../components/Ui/Button";
import IconButton from "../components/Ui/IconButton";
import LoadingOverlay from "../components/Ui/LoadingOverlay";
import { COLORS } from "../constants/colors";
import { ExpensesContext } from "../store/expenses-context";
import { storeExpense, updateExpense, deleteExpense } from "../utils/http";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const editedExpensId = route.params?.expenseId;
  const isEditing = !!editedExpensId;

  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    (x) => x.id === editedExpensId
  );

  console.log("selectedExpense", selectedExpense);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteepxenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpensId);
      expensesCtx.deleteEpxense(editedExpensId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  const cancelExpenseHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpensId, expenseData);
        await updateExpense(editedExpensId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again later!");
      setIsSubmitting(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isFetching) {
    return <Error message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelExpenseHandler}
        isEditing={isEditing}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={COLORS.primary}
            size={24}
            onPress={deleteepxenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.secondary,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary,
    alignItems: "center",
  },
});
