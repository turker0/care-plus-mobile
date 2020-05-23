import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Input from "../components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomError from "../components/customerror";

const Login = (mail, pass, navigation, setError) => {
  let account = {
    mail: mail,
    password: pass,
  };
  let formBody = [];

  for (var key in account) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(account[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch("http://192.168.1.6:3000/api/profiles/login", {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson.success) {
        navigation.navigate("Home");
      } else {
        setError("Wrong e-mail or password. Please try again");
      }
    })
    .catch((err) => console.log(err));
};

const Welcome = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [mail, setMail] = useState(false);
  const [pass, setPass] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleLeft}>Care, </Text>
              <Text style={styles.titleRight}>Plus</Text>
            </View>

            <View style={styles.entryWrapper}>
              {error ? <CustomError text={error} /> : null}
              <Input
                label="E-mail"
                value={mail}
                placeholder="E-mail"
                setValue={setMail}
                type="default"
                length={30}
                secureTextEntry={false}
              />

              <Input
                label="Password"
                value={pass}
                placeholder="Password"
                setValue={setPass}
                type="default"
                length={30}
                secureTextEntry={true}
              />

              <TouchableWithoutFeedback
                onPress={() => {
                  if (mail && pass) {
                    Login(mail, pass, navigation, setError);
                  }
                }}
              >
                <View style={styles.login}>
                  <MaterialCommunityIcons name="login" size={20} color="#fff" />
                  <Text style={styles.loginText}>login</Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.or}>or</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Profile")}
              >
                <Text style={styles.profile}>create a new profile</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 100,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleLeft: {
    fontSize: 40,
    fontFamily: "Jost-Regular",
    color: "#424242",
    letterSpacing: 3,
    marginVertical: 55,
  },
  titleRight: {
    fontSize: 40,
    fontFamily: "Jost-Medium",
    letterSpacing: 3,
    color: "#3DCC85",
  },
  entryWrapper: {
    width: "70%",
    padding: 10,
  },
  login: {
    width: "70%",
    marginLeft: "15%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3DCC85",
    elevation: 5,
    borderRadius: 8,
    paddingVertical: 10,
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Jost-Bold",
    marginLeft: 5,
    letterSpacing: 1,
  },
  or: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "Jost-Bold",
    paddingLeft: 5,
    textAlign: "center",
    margin: 10,
  },
  profile: {
    fontSize: 14,
    color: "#3DCC85",
    fontFamily: "Jost-Bold",
    paddingLeft: 5,
    textAlign: "center",
  },
});
