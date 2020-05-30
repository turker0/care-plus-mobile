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
      <Text
        style={
          index == type
            ? styles.descPassive
            : [
                styles.descPassive,
                { color: "#424242", backgroundColor: "#e5e5e5" },
              ]
        }
      >
        - {desc}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  descPassive: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#3DCC85",
    borderRadius: 8,
    fontFamily: "Jost-Regular",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 3,
    fontSize: 12,
  },
});
