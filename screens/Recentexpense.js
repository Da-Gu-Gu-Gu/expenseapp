import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import ExpenseOutput from '../components/ExpenseOutput'
import { COLORS } from '../constants/colors'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../utils/dat'

const Recentexpense = () => {

  const expensesCtx=useContext(ExpensesContext)

  const recentExpenses=expensesCtx.expenses.filter((expense)=>{
    const today=new Date();
    const date7DaysAgo=getDateMinusDays(today,7)
    return (expense.date > date7DaysAgo) && (expense.date <= today)
  })

  return (
    <View style={styles.container}>
        <ExpenseOutput 
        expenses={recentExpenses}
        expensesPeriod={"Last 7 Days"}
        fallbackText={"No expenses registered fot the 7 days ago."}
        />
    </View>
  )
}

export default Recentexpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.bg,
  },
})