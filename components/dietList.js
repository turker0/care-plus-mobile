import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DietList = ({ name, calorie }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.calorie}>{calorie}</Text>
    </View>
  );
};

export default DietList;

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 30,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    paddingHorizontal: 5,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  name: {
    fontSize: 12,
    fontFamily: "Jost-Medium",
  },
  calorie: {
    fontSize: 1,
    fontFamily: "Jost-Bold",
  },
});
