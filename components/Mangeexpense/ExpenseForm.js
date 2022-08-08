import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { COLORS } from "../../constants/colors";
import Button from "../Ui/Button";
import { getFormattedDate2 } from "../../utils/dat";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, defaultValues }) => {
  console.log(defaultValues);

  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate2(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHanlder = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    console.log("aaaaa", expenseData);

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    // console.log(expenseData.date.toString());
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (amountIsValid && dateIsValid && descriptionIsValid) {
      onSubmit(expenseData);
    } else {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      //   Alert.alert("Invalid Input", "Please check your input values.");
      return;
    }
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (x) => inputChangeHandler("amount", x),
            value: inputs.amount.value,
          }}
        />
        <Input
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: COLORS.bg,
            maxLength: 10,
            onChangeText: (x) => inputChangeHandler("date", x),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: (x) => inputChangeHandler("description", x),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input value - please check your enterd data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHanlder}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  inputRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
    color: "white",
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
  errorText: {
    textAlign: "center",
    color: COLORS.info,
    margin: 8,
  },
});
