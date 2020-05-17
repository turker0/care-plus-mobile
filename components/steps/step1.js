import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Input from "../input";

const Step1 = () => {
  const [height, setHeight] = useState("");
  const [isHeightTrue, setIsHeightTrue] = useState(false);
  const [weight, setWeight] = useState("");
  const [isweightTrue, setIsweightTrue] = useState(false);
  const [result, setResult] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>body mass index</Text>
      <Input
        value={height}
        placeholder="Height (cm)"
        setValue={setHeight}
        type="numeric"
        length={3}
        validateKey={isHeightTrue}
        validation={setIsHeightTrue}
      />
      <Input
        value={weight}
        placeholder="Weight (kg)"
        setValue={setWeight}
        type="numeric"
        length={3}
        validateKey={isweightTrue}
        validation={setIsweightTrue}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          if (isHeightTrue && isweightTrue)
            setResult((weight / (height * height)).toFixed(2));
        }}
      >
        <View style={styles.calculateWrapper}>
          <AntDesign name="rightcircleo" size={18} color="#fff" />
          <Text style={styles.calculate}>calculate</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text>{result}</Text>
      <TouchableWithoutFeedback>
        <View style={styles.nextWrapper}>
          <Text style={styles.next}>next</Text>
          <MaterialIcons name="navigate-next" size={24} color="#3DCC85" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 8,
    borderColor: "#3DCC85",
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Jost-Bold",
    textAlign: "center",
    color: "#3DCC85",
    margin: 5,
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
