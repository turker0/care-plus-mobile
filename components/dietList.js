import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DietList = ({ name, calorie, setSelectedFilter, setName }) => {
  setName(name);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedFilter(true);
      }}
    >
      <View style={styles.container}>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.calorieWrapper}>
          <Text style={styles.calorie}>{calorie}</Text>
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={12}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DietList;

const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nameWrapper: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 13,
    fontFamily: "Jost-Medium",
  },
  calorieWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  calorie: {
    fontSize: 12,
    fontFamily: "Jost-Bold",
  },
});
