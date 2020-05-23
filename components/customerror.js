import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomError = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomError;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: "Jost-Medium",
    color: "red",
    textAlign: "center",
    marginBottom: 15,
  },
});
