import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Indicator = ({ indicate, setIndicate }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          indicate === 1 ? styles.indicatorActive : styles.indicatorPassive,
        ]}
      ></View>
      <View
        style={[
          indicate === 2 ? styles.indicatorActive : styles.indicatorPassive,
        ]}
      ></View>
      <View
        style={[
          indicate === 3 ? styles.indicatorActive : styles.indicatorPassive,
        ]}
      ></View>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicatorActive: {
    width: 10,
    height: 10,
    backgroundColor: "#3DCC85",
    borderRadius: 500,
    marginHorizontal: 5,
    elevation: 5,
  },
  indicatorPassive: {
    width: 10,
    height: 10,
    backgroundColor: "#B7B7B7",
    borderRadius: 500,
    marginHorizontal: 5,
    elevation: 3,
  },
});
