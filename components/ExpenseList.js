import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'
// import { ScrollView } from 'react-native-web'


const renderExpItem=(itemData)=>{
    return (
       <ExpenseItem {...itemData.item} />
    )
}

const ExpenseList = ({expenses}) => {
  return (
    <View style={styles.container}>
        <FlatList 
        data={expenses}
        renderItem={renderExpItem}
        keyExtractor={(item)=>item.id}
            />
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})