import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = ({
  value,
  placeholder,
  setValue,
  type,
  length,
  validation,
  validateKey,
}) => {
  return (
    <TextInput
      style={styles.profileName}
      onChangeText={(text) => {
        setValue(text);
        if (text.length >= 2) {
          validation(true);
        } else validation(false);
      }}
      value={value}
      placeholder={placeholder}
      keyboardType={type}
      maxLength={length}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  profileName: {
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
});
