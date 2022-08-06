import { createContext, useReducer } from "react";

const DUMMY_EXP = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-06"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-08-08"),
  },
  {
    id: "e3",
    description: "A pair of blah blah",
    amount: 159.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e4",
    description: "A book of shoes",
    amount: 19.99,
    date: new Date("2022-08-20"),
  },
  {
    id: "e5",
    description: "A car",
    amount: 9859.99,
    date: new Date("2022-08-30"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-06"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-08-08"),
  },
  {
    id: "e8",
    description: "A pair of blah blah",
    amount: 159.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e9",
    description: "A book of shoes",
    amount: 19.99,
    date: new Date("2022-08-20"),
  },
  {
    id: "e10",
    description: "A car",
    amount: 9859.99,
    date: new Date("2022-08-30"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ desciption, amount, date }) => {},
  updateExpense: (id) => {},
  deleteEpxense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableEpxenseInde = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateableEpxenseInde];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updateableEpxenseInde] = updatedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXP);

  const addExpense = ({ expenseData }) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id: id,
        data: expenseData,
      },
    });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteEpxense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
