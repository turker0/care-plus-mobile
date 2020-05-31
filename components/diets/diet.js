import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DietCard from "../food/dietcard";

const Diet = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <DietCard type="Dinner" totalCalorie="1300" />
    </ScrollView>
  );
};

export default Diet;

const styles = StyleSheet.create({});
