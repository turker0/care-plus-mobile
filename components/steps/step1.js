import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Input from "../input";
import BMITable from "./bmiTable";

import Next from "./next";

const Step1 = ({
  height,
  weight,
  setHeight,
  setWeight,
  setIndicate,
  bmi,
  setBmi,
}) => {
  const [tableVisible, setTableVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>body mass index</Text>
      <View style={styles.inputWrapper}>
        <Input
          label="Height"
          value={height}
          placeholder="Height (cm)  "
          setValue={setHeight}
          type="numeric"
          length={3}
        />
        <Input
          label="Weight"
          value={weight}
          placeholder="Weight (kg)   "
          setValue={setWeight}
          type="numeric"
          length={3}
        />
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setBmi(((weight / (height * height)) * 10000).toFixed(0));
        }}
      >
        <View style={styles.calculateWrapper}>
          <AntDesign name="rightcircleo" size={18} color="#fff" />
          <Text style={styles.calculate}>calculate</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.result}>bmi : {bmi}</Text>
      <TouchableWithoutFeedback onPress={() => setTableVisible(true)}>
        <Text style={styles.table}>{bmi ? "see bmi table details" : null}</Text>
      </TouchableWithoutFeedback>
      <BMITable visible={tableVisible} setVisible={setTableVisible} />
      <Next indicate={2} setIndicate={setIndicate} />
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    color: "#3DCC85",
    margin: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  calculateWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    marginLeft: "25%",
    backgroundColor: "#3DCC85",
    marginTop: 20,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
  },
  calculate: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Jost-Regular",
    marginLeft: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#3DCC85",
  },
  table: {
    fontSize: 12,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#424242",
  },
  nextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  next: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    textAlign: "right",
    textAlignVertical: "center",
    color: "#3DCC85",
  },
});
