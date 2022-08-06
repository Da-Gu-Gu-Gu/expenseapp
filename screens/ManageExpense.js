import { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Ui/Button'
import IconButton from '../components/Ui/IconButton'
import { COLORS } from '../constants/colors'
import { ExpensesContext } from '../store/expenses-context'


const ManageExpense = ({route,navigation}) => {

  const editedExpensId=route.params?.expenseId
  const isEditing=!!editedExpensId

  const expensesCtx=useContext(ExpensesContext)

  useLayoutEffect(()=>{
  navigation.setOptions({
    title:isEditing ? 'Edit Expense':'Add Expense'
  })
},[navigation,isEditing])

const deleteepxenseHandler=()=>{
  expensesCtx.deleteEpxense(editedExpensId)
  navigation.goBack()
}

const cancelExpenseHandler=()=>{
  navigation.goBack()
}

const confirmHandler=()=>{
  if(isEditing){
    expensesCtx.updateExpense(
      editedExpensId,
      {
        description:'Test',amount:15,date:new Date('2022-08-05')
    })
  }else{
    expensesCtx.addExpense({
      description:'Test Add',amount:15,date:new Date('2022-08-05')
    })
  }
  navigation.goBack()
}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button 
        style={styles.button}
        mode="flat"
        onPress={cancelExpenseHandler}
        >Cancel</Button>
        <Button
            style={styles.button}
        onPress={confirmHandler}>{isEditing? 'Update':'Add'}</Button>
      </View>
     {isEditing &&
     <View style={styles.deleteContainer}>
     <IconButton icon={"trash"}
      color={COLORS.primary} 
      size={24}
      onPress={
        deleteepxenseHandler
      }
      />
      </View>
    }
    
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:COLORS.info,
  },
  button:{
    minWidth:120,
    marginHorizontal:8,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },  
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:COLORS.primary,
    alignItems:'center',

  }
})