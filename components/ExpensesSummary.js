import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants/colors'

const ExpensesSummary = ({expenses,periodName}) => {
    
    const expensesSum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount
    },0)


  return (
    <View style={styles.contianer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    contianer:{
        padding:8,
        backgroundColor:COLORS.primary,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    period:{
        fontSize:12,
        color:COLORS.white,
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:COLORS.white
    }
})