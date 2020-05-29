import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Food from "./food/food";

const toggleClicked = (setIsClicked, isClicked) => {
  setIsClicked(!isClicked);
};

const breakfast = [
  {
    name: "Cheese",
    calorie: 30,
    desc: "two piece",
  },
  {
    name: "Milk",
    calorie: 60,
    desc: "one cup",
  },
  {
    name: "Bread",
    calorie: 40,
    desc: "one piece",
  },
];

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
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => toggleClicked(setIsClicked, isClicked)}
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
        {isClicked ? (
          <View style={styles.onClick}>
            <View style={styles.fdWrapper}>
              <Text style={styles.dietTitle}>breakfast</Text>
              <Text style={styles.calorie}>
                <MaterialCommunityIcons
                  name="food-apple-outline"
                  size={12}
                  color="black"
                />
                {calBreakfast}
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mealLayout}>
                <FlatList
                  flexDirection="row"
                  data={breakfast}
                  renderItem={({ item, index }) => (
                    <Food
                      name={item.name}
                      calorie={item.calorie}
                      desc={item.numberDesc}
                    />
                  )}
                  listKey={(item2, index) => "D" + index.toString()}
                />
              </View>
            </ScrollView>
            <View style={styles.fdWrapper}>
              <Text style={styles.dietTitle}>lunch</Text>
              <Text style={styles.calorie}>
                <MaterialCommunityIcons
                  name="food-apple-outline"
                  size={12}
                  color="black"
                />
                {calLunch}
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mealLayout}>
                <FlatList
                  flexDirection="row"
                  data={lunch}
                  renderItem={({ item, index }) => (
                    <Food
                      name={item.name}
                      calorie={item.calorie}
                      desc={item.numberDesc}
                    />
                  )}
                  listKey={(item2, index) => "D" + index.toString()}
                />
              </View>
            </ScrollView>
            <View style={styles.fdWrapper}>
              <Text style={styles.dietTitle}>dinner</Text>
              <Text style={styles.calorie}>
                <MaterialCommunityIcons
                  name="food-apple-outline"
                  size={12}
                  color="black"
                />
                {calDinner}
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mealLayout}>
                <FlatList
                  flexDirection="row"
                  data={dinner}
                  renderItem={({ item, index }) => (
                    <Food
                      name={item.name}
                      calorie={item.calorie}
                      desc={item.numberDesc}
                    />
                  )}
                  listKey={(item2, index) => "D" + index.toString()}
                />
              </View>
            </ScrollView>
          </View>
        ) : null}
      </View>
    </ScrollView>
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
  onClick: {
    marginTop: -5,
    width: 240,
    backgroundColor: "#fff",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,

    borderRadius: 8,
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
