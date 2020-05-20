import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Exercise = ({ desc, type, index, setIndex }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIndex(type);
      }}
    >
      <Text style={index == type ? styles.descActive : styles.descPassive}>
        - {desc}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  descActive: {
    color: "#3DCC85",
    fontFamily: "Jost-Regular",
    marginVertical: 3,
  },
  descPassive: {
    color: "#424242",
    fontFamily: "Jost-Regular",
    marginVertical: 3,
  },
});
