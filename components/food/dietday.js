import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Food from "./food";

const DietCard = ({ type, totalCalorie, diet }) => {
  return (
    <View style={styles.food}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{totalCalorie} calories</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Food name="Cheese" desc="two slice" calorie="104" />
        <Food name="Cheese" desc="two slice" calorie="104" />
        <Food name="Cheese" desc="two slice" calorie="104" />
        <Food name="Cheese" desc="two slice" calorie="104" />
        <Food name="Cheese" desc="two slice" calorie="104" />
      </ScrollView>
    </View>
  );
};

export default DietCard;

const styles = StyleSheet.create({
  food: {
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 5,
    marginHorizontal: 10,
    marginTop: 20,
  },
  titleWrapper: {
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    flex: 1,
    marginLeft: 25,
  },
});
