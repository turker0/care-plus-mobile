import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../components/input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [profileName, setProfileName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [gender, setGender] = useState("");
  const [isNameTrue, setIsNameTrue] = useState("");
  const [isWeightTrue, setIsWeightTrue] = useState("");
  const [isHeightTrue, setIsHeightTrue] = useState("");
  const [isTargetTrue, setIsTargetTrue] = useState("");

  let male = " Male",
    female = " Female";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profileWrapper}>
              <Input
                value={profileName}
                placeholder="Profile name"
                setValue={setProfileName}
                type="default"
                length={20}
                validation={setIsNameTrue}
                validateKey={isNameTrue}
              />
              <View style={styles.bodyWrapper}>
                <TouchableWithoutFeedback onPress={() => setGender("m")}>
                  <Text
                    style={[
                      gender === "m"
                        ? styles.genderText
                        : styles.genderInvalidText,
                    ]}
                  >
                    <Ionicons
                      name="md-male"
                      size={20}
                      color={gender === "m" ? "#3DCC85" : "#e5e5e5"}
                    />{" "}
                    {male}
                  </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => setGender("f")}>
                  <Text
                    style={[
                      gender === "f"
                        ? styles.genderText
                        : styles.genderInvalidText,
                    ]}
                  >
                    <Ionicons
                      name="md-male"
                      size={20}
                      color={gender === "f" ? "#3DCC85" : "#e5e5e5"}
                    />
                    {female}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.bodyWrapper}>
                <Input
                  value={height}
                  placeholder="Height (cm)"
                  setValue={setHeight}
                  type="numeric"
                  length={3}
                  validation={setIsHeightTrue}
                  validateKey={isHeightTrue}
                />

                <Input
                  value={weight}
                  placeholder="Weight (kg)"
                  setValue={setWeight}
                  type="numeric"
                  length={3}
                  validation={setIsWeightTrue}
                  validateKey={isWeightTrue}
                />
              </View>
              <View style={styles.targetWrapper}>
                <Input
                  value={targetWeight}
                  placeholder="Target weight"
                  setValue={setTargetWeight}
                  type="numeric"
                  length={3}
                  validation={setIsTargetTrue}
                  validateKey={isTargetTrue}
                />

                <TouchableWithoutFeedback
                  onPress={() => {
                    if (
                      isNameTrue &&
                      isHeightTrue &&
                      isWeightTrue &&
                      isTargetTrue &&
                      (gender === "f" || gender === "m")
                    )
                      navigation.navigate("contentRoute");
                  }}
                >
                  <View
                    style={[
                      isNameTrue &&
                      isHeightTrue &&
                      isWeightTrue &&
                      isTargetTrue &&
                      (gender === "f" || gender === "m")
                        ? styles.saveWrapper
                        : styles.saveInvalid,
                    ]}
                  >
                    <MaterialIcons name="add" size={20} color="#fff" />
                    <Text style={styles.save}>Create</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    fontFamily: "Jost-Regular",
    margin: 55,
    letterSpacing: 3,
    color: "#424242",
  },
  profileWrapper: {
    width: "70%",
    padding: 10,
  },
  genderText: {
    flex: 1,
    fontSize: 14,
    color: "#3DCC85",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    elevation: 5,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    letterSpacing: 1,
  },
  genderInvalidText: {
    flex: 1,
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
  bodyWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  targetWrapper: {
    width: "60%",
    marginLeft: "20%",
  },
  saveWrapper: {
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
  saveInvalid: {
    width: "70%",
    marginLeft: "15%",
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
