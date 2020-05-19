import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../input";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Step3 = ({ navigation }) => {
  const [targetWeight, setTargetWeight] = useState("");
  const [isTargetWeightTrue, setIsTargetWeightTrue] = useState("");
  return (
    <View>
      <Input
        label="Target weight"
        value={targetWeight}
        placeholder="Target weigh (kg)   "
        setValue={setTargetWeight}
        type="numeric"
        length={3}
        validation={setIsTargetWeightTrue}
      />
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <View
          style={
            isTargetWeightTrue
              ? styles.completeWrapperValid
              : styles.completeWrapperUnvalid
          }
        >
          <MaterialIcons name="done-all" size={20} color="#fff" />
          <Text style={styles.completeText}>Complete</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  completeWrapperValid: {
    width: "50%",
    marginLeft: "25%",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#3DCC85",
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 5,
  },

  completeWrapperUnvalid: {
    width: "50%",
    marginLeft: "25%",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#B7B7B7",
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 5,
  },
  completeText: {
    fontSize: 14,
    fontFamily: "Jost-Medium",
    color: "#fff",
    marginLeft: 5,
  },
});
