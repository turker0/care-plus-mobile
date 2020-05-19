import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CustomText = ({ text, label, size }) => {
  return (
    <View>
      <View style={styles.label}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <Text style={[styles.text, { width: size }]}>{text}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    zIndex: 3, // works on ios
    elevation: 6,
    paddingHorizontal: 5,
    top: 0,
    left: 10,
    backgroundColor: "#3DCC85",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  labelText: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "Jost-Medium",
  },
  text: {
    zIndex: 0,
    fontSize: 14,
    color: "#3DCC85",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    elevation: 5,
    margin: 5,
    padding: 10,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    letterSpacing: 1,
  },
});
