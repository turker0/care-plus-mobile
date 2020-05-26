import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const Gender = ({ gender, setGender }) => {
  return (
    <View style={styles.genderWrapper}>
      <View style={{ width: "45%", marginRight: "2.5%" }}>
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
            male
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ width: "45%", marginLeft: "2.5%" }}>
        <TouchableWithoutFeedback onPress={() => setGender("f")}>
          <Text
            style={[
              gender === "f" ? styles.genderText : styles.genderInvalidText,
            ]}
          >
            <Ionicons
              name="md-female"
              size={20}
              color={gender === "f" ? "#fff" : "#e5e5e5"}
            />
            female
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  genderWrapper: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  genderText: {
    height: 40,
    marginVertical: 5,
    width: "100%",
    zIndex: 0,
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Jost-Regular",
    backgroundColor: "#3DCC85",
    borderRadius: 8,
    letterSpacing: 1,
  },
  genderInvalidText: {
    height: 40,
    marginVertical: 5,
    width: "100%",
    zIndex: 0,
    elevation: 5,
    fontSize: 14,
    color: "#e5e5e5",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    borderRadius: 8,
    letterSpacing: 1,
  },
});
