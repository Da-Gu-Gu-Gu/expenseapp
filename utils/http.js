import axios from "axios";

const backendUrl =
  "https://rn-course-799ed-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${backendUrl}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpense = async () => {
  const response = await axios.get(`${backendUrl}/expenses.json`);

  console.log(response.data);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(`${backendUrl}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(`${backendUrl}/expenses/${id}.json`);
};
