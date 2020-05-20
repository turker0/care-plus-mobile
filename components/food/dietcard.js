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
      <TouchableWithoutFeedback>
        <View style={styles.done}>
          <MaterialIcons name="done" size={20} color="#fff" />
          <Text style={styles.doneText}>done</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DietCard;

const styles = StyleSheet.create({
  food: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 5,
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
  done: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3DCC85",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 20,
    elevation: 1,
  },
  doneText: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    marginLeft: 2,
    color: "#fff",
  },
});
