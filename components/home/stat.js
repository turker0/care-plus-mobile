import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stat = ({ title, stat }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.stat}>{stat}</Text>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    color: "#424242",
    textAlign: "center",
  },
  stat: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    color: "#424242",
    textAlign: "center",
  },
});
