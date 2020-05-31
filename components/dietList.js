import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DietModal from "./diets/dietModal";

const DietList = ({
  name,
  calorie,
  breakfast,
  lunch,
  dinner,
  calBreakfast,
  calLunch,
  calDinner,
}) => {
  const [click, setClick] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setClick(true)}>
        <View style={styles.container}>
          <DietModal click={click} />
          <Text style={styles.name}>{name}</Text>
          <View style={styles.calorieWrapper}>
            <Text style={styles.calorie}>{calorie}</Text>
            <MaterialCommunityIcons
              name="food-apple-outline"
              size={16}
              color="#fff"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DietList;

const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#3DCC85",
    marginVertical: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: "5%",
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  name: {
    width: "75%",
    fontSize: 16,
    color: "#fff",
    fontFamily: "Jost-Medium",
  },
  calorieWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  calorie: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Jost-Bold",
  },
  onClick: {
    marginTop: -5,
    width: 240,
    backgroundColor: "#fff",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dietTitle: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    color: "#424242",
  },
  mealLayout: {
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fdWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
  },
});
