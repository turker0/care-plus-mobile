import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Gender = ({ gender, setGender }) => {
  let male = " Male",
    female = " Female";
  return (
    <View style={styles.genderWrapper}>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => setGender("m")}>
          <Text
            style={[
              gender === "m" ? styles.genderText : styles.genderInvalidText,
            ]}
          >
            <Ionicons
              name="md-male"
              size={20}
              color={gender === "m" ? "#fff" : "#e5e5e5"}
            />{" "}
            {male}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => setGender("f")}>
          <Text
            style={[
              gender === "f" ? styles.genderText : styles.genderInvalidText,
            ]}
          >
            <Ionicons
              name="md-male"
              size={20}
              color={gender === "f" ? "#fff" : "#e5e5e5"}
            />
            {female}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  genderWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  genderText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Jost-Regular",
    margin: 5,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
    letterSpacing: 1,
    backgroundColor: "#3DCC85",
  },
  genderInvalidText: {
    color: "#B7B7B7",
    fontSize: 14,
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    margin: 5,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
    letterSpacing: 1,
  },
});
