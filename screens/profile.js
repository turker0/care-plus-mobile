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
import Gender from "../components/gender";

import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [profileName, setProfileName] = useState("");
  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");

  const [isNameTrue, setIsNameTrue] = useState("");
  const [isEmailTrue, setIsEmailTrue] = useState("");
  const [isPassTrue, setIsPassTrue] = useState("");
  const [isPassAgainTrue, setIsPassAgainTrue] = useState("");

  let male = " Male",
    female = " Female",
    title = "Create a new profile. Manage your all diet stuffs in one profile.";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.profileWrapper}>
              <Input
                label="Profile name"
                value={profileName}
                placeholder="Profile name"
                setValue={setProfileName}
                type="default"
                length={20}
                validation={setIsNameTrue}
                secureTextEntry={false}
              />
              <Gender gender={gender} setGender={setGender} />
              <Input
                label="E-mail"
                value={email}
                placeholder="E-mail"
                setValue={setEmail}
                type="email-address"
                length={30}
                validationEmail={setIsEmailTrue}
                secureTextEntry={false}
              />
              <Input
                label="Password"
                value={pass}
                placeholder="Password"
                setValue={setPass}
                type="default"
                length={20}
                validation={setIsPassTrue}
                secureTextEntry={true}
              />
              <Input
                label="Password again"
                value={passAgain}
                placeholder="Password again"
                setValue={setPassAgain}
                type="default"
                length={20}
                validation={setIsPassAgainTrue}
                secureTextEntry={true}
              />

              <TouchableWithoutFeedback
                onPress={() => {
                  if (
                    isNameTrue &&
                    isEmailTrue &&
                    isPassTrue &&
                    isPassAgainTrue &&
                    pass === passAgain &&
                    (gender === "f" || gender === "m")
                  )
                    navigation.navigate("Setup", {
                      gender: gender,
                    });
                }}
              >
                <View
                  style={[
                    isNameTrue &&
                    isEmailTrue &&
                    isPassTrue &&
                    isPassAgainTrue &&
                    pass === passAgain &&
                    (gender === "f" || gender === "m")
                      ? styles.saveValid
                      : styles.saveInvalid,
                  ]}
                >
                  <MaterialIcons name="add" size={20} color="#fff" />
                  <Text style={styles.save}>Create</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontFamily: "Jost-Regular",
    textAlign: "center",
    padding: "5%",
    marginHorizontal: "10%",
    marginTop: "10%",
    marginBottom: "5%",
    color: "#424242",
  },
  profileWrapper: {
    width: "70%",
    padding: 10,
  },
  genderText: {
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#3DCC85",
    fontFamily: "Jost-Regular",
    elevation: 5,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    letterSpacing: 1,
  },
  genderInvalidText: {
    fontSize: 14,
    color: "#B7B7B7",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    elevation: 5,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    letterSpacing: 1,
  },
  genderWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  targetWrapper: {
    width: "60%",
    marginLeft: "20%",
  },
  saveValid: {
    width: "50%",
    marginLeft: "25%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3DCC85",
    elevation: 5,
    borderRadius: 8,
    paddingVertical: 10,
  },
  saveInvalid: {
    width: "50%",
    marginLeft: "25%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#B7B7B7",
    elevation: 5,
    borderRadius: 8,
    paddingVertical: 10,
  },
  save: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Jost-Bold",
    marginLeft: 5,
    letterSpacing: 1,
  },
});
