import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stat = ({ title, stat }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{stat}</Text>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderColor: "#fff",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    color: "#424242",
    margin: 10,
  },
  stat: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    color: "#424242",
  },
});
