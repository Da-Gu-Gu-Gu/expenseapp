import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import Error from "../components/Ui/Error";
import LoadingOverlay from "../components/Ui/LoadingOverlay";
import { COLORS } from "../constants/colors";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/dat";
import { fetchExpense } from "../utils/http";

const Recentexpense = () => {
  const [isFetching, setIsFetching] = useState(false);
  const expensesCtx = useContext(ExpensesContext);
  const [error, setError] = useState();

  // const [fetchedExpenses, setFetchExpenses] = useState([]);

  useEffect(() => {
    const getExpense = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses@!");
      }

      setIsFetching(false);

      // setFetchExpenses(expenses);
    };
    getExpense();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isFetching) {
    return <Error message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <View style={styles.container}>
      <ExpenseOutput
        expenses={recentExpenses}
        expensesPeriod={"Last 7 Days"}
        fallbackText={"No expenses registered fot the 7 days ago."}
      />
    </View>
  );
};

export default Recentexpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
