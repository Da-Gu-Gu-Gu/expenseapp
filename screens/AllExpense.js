import { useContext } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import ExpenseOutput from '../components/ExpenseOutput'
import { COLORS } from '../constants/colors'
import { ExpensesContext } from '../store/expenses-context'

const AllExpense = () => {

  const expensesCtx=useContext(ExpensesContext)

  return (
    <View style={styles.container}>
        <ExpenseOutput 
        expenses={expensesCtx.expenses}
        expensesPeriod={"Total"}
        fallbackText={"No expenses registered fot the 7 days ago."}
        />
    </View>
  )
}

export default AllExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.bg,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})