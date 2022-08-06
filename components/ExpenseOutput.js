import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpenseList from './ExpenseList'
import { COLORS } from '../constants/colors'




const ExpenseOutput = ({expenses,expensesPeriod,fallbackText}) => {


let content=<Text style={styles.infoText}>{fallbackText}</Text>

if(expenses.length >0){
     content=<ExpenseList 
     expenses={expenses}
    />   
}

  return (
    <View style={styles.container}>
       <ExpensesSummary
        expenses={expenses}
        periodName={expensesPeriod}
       />
         {content}
    </View>
  )
}

export default ExpenseOutput

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        backgroundColor:COLORS.info,
    },
    infoText:{
        color:COLORS.black,
        fontSize:16,
        textAlign:'center',
        marginTop:32,
    }
})