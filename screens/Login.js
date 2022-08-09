import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useState } from "react";
import Color from "../constants/color";
import Input from "../components/Input";
import { loginUser } from "../utils/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);

  const Auth = useContext(AuthContext);

  const [logininputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async () => {
    try {
      setLoader(true);
      let token = await loginUser(logininputs.email, logininputs.password);
      console.log("AA", token);
      Auth.authenticate(token);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay />;
  }

  const emailHandler = (x) => {
    setLoginInputs((prev) => {
      return { ...prev, email: x };
    });
  };

  const passwordHandler = (x) => {
    setLoginInputs((prev) => {
      return { ...prev, password: x };
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.rootContainer}>
        <View style={styles.wrapper}>
          <Input name="Email" type={"email-address"} handler={emailHandler} />
          <Input name="Password" type={"default"} handler={passwordHandler} />
          <Pressable style={styles.login} onPress={() => loginSubmit()}>
            <Text style={styles.logintext}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.status}>
          <Text style={styles.signup}>If you don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("signup")}>
            <Text
              style={[
                styles.signup,
                { color: Color.link, textDecorationStyle: "dashed" },
              ]}
            >
              {" "}
              Signup{" "}
            </Text>
          </Pressable>
          <Text style={styles.signup}> Here</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  wrapper: {
    marginTop: 100,
    width: "80%",
    borderRadius: 12,
    backgroundColor: Color.seconadry,
    padding: 24,
  },
  login: {
    borderRadius: 10,
    marginTop: 12,
    padding: 12,
    backgroundColor: Color.btn,
  },
  logintext: {
    textAlign: "center",
    fontWeight: "bold",
    color: Color.white,
    fontSize: 15,
  },
  signup: {
    marginTop: 10,
  },

  status: {
    flexDirection: "row",
  },
});
