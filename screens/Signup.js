import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useState } from "react";
import Color from "../constants/color";
import Input from "../components/Input";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

const Signup = ({ navigation }) => {
  const [loader, setLoader] = useState(false);

  const Auth = useContext(AuthContext);

  const [signUpinputs, setsignUpInputs] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const signupSubmit = async () => {
    try {
      setLoader(true);
      let token = await createUser(signUpinputs.email, signUpinputs.password);
      Auth.authenticate(token);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay />;
  }

  const signupEmailHandler = (x) => {
    setsignUpInputs((prev) => {
      return { ...prev, email: x };
    });
  };

  const signupConfirmEmailHandler = (x) => {
    setsignUpInputs((prev) => {
      return { ...prev, confirmEmail: x };
    });
  };

  const signupPasswordHandler = (x) => {
    setsignUpInputs((prev) => {
      return { ...prev, password: x };
    });
  };

  const signupconfirmPasswordHandler = (x) => {
    setsignUpInputs((prev) => {
      return { ...prev, confirmPassword: x };
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.rootContainer}>
        <View style={styles.wrapper}>
          <Input
            name="Email"
            type={"email-address"}
            handler={signupEmailHandler}
          />
          <Input
            name="Confirm Email"
            type={"email-address"}
            handler={signupConfirmEmailHandler}
          />
          <Input
            name="Password"
            type={"default"}
            handler={signupPasswordHandler}
          />
          <Input
            name="Confirm Password"
            type={"default"}
            handler={signupconfirmPasswordHandler}
          />
          <Pressable style={styles.login} onPress={() => signupSubmit()}>
            <Text style={styles.logintext}>Signup</Text>
          </Pressable>
        </View>
        <View style={styles.status}>
          <Text style={styles.signup}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text
              style={[
                styles.signup,
                { color: Color.link, textDecorationStyle: "dashed" },
              ]}
            >
              {" "}
              Login{" "}
            </Text>
          </Pressable>
          <Text style={styles.signup}> Here</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
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
