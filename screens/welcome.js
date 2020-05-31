import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Dimensions,
  ImageBackground,
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
        getAccount(mail, navigation);
        setError(false);
      } else {
        setError("Wrong e-mail or password. Please try again");
      }
    })
    .catch((err) => console.log(err));
};

const getAccount = (mail, navigation) => {
  fetch("http://192.168.1.6:3000/api/profiles/" + mail, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      navigation.navigate("Home", {
        profile: {
          name: resJson.name,
          age: resJson.age,
          mail: mail,
          gender: resJson.gender,
          height: resJson.height,
          weight: resJson.weight,
          bmi: resJson.bmi,
          bmr: resJson.bmr,
          target: resJson.target,
          date: resJson.date,
        },
      });
    })
    .catch((err) => console.log(err));
};

const Welcome = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "#424242" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require("../assets/images/bg.jpg")}
            style={styles.bg}
          >
            <View style={styles.fdWrapper}>
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
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Profile")}
              >
                <Text style={styles.profile}>
                  Don't you have a profile? Create a new one.
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  fdWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Dimensions.get("window").height * 0.35,
  },
  entryWrapper: {
    width: "100%",
  },
  titleLeft: {
    fontSize: 40,
    fontFamily: "Jost-Medium",
    color: "#e74c3c",
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 10,
  },
  titleRight: {
    fontSize: 40,
    fontFamily: "Jost-Bold",
    letterSpacing: 3,
    color: "#27ae60",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 10,
  },
  login: {
    width: "50%",
    marginLeft: "25%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3DCC85",
    elevation: 5,
    paddingVertical: "2%",
    borderRadius: 8,
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Jost-Bold",
    marginLeft: 5,
    letterSpacing: 1,
  },
  profile: {
    width: "50%",
    alignSelf: "center",
    fontSize: 14,
    marginTop: "2%",
    color: "#3DCC85",
    fontFamily: "Jost-Bold",
    paddingLeft: 5,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 10,
  },
});
