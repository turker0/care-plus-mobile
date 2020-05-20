import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Food = ({ name, calorie, desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc} </Text>
      <Text style={styles.desc}>{calorie} cal</Text>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 80,
    marginHorizontal: 5,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "#3DCC85",
    borderRadius: 12,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Jost-Medium",
  },
  desc: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Jost-Regular",
  },
});
