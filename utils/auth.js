import axios from "axios";
import { Alert } from "react-native";

const API_KEY = "AIzaSyD8WI2ySPs3JXjlZG_s44NK1koGwFUnRw4";

export const createUser = async (email, password) => {
  console.log(email);
  console.log(password);
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );

    const token = response.data?.idToken;
    return token;
  } catch (error) {
    Alert.alert("Invalid Login", "Try Again Later");
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  console.log(email);
  console.log(password);
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    console.log(response.data.idToken);
    const token = response.data?.idToken;
    return token;
  } catch (error) {
    Alert.alert("Invalid Login", "Try Again Later");
    console.log(error);
  }
};
