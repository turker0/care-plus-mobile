import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FoodElement from "../components/food/food";

const Food = () => {
  return (
    <View>
      <FoodElement />
      <FoodElement />
      <FoodElement />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({});
