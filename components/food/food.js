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
    height: 90,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "Jost-Medium",
  },
  desc: {
    color: "#424242",
    fontSize: 12,
    fontFamily: "Jost-Regular",
  },
});
