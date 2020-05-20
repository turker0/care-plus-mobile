import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DietCard from "../components/food/dietcard";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.day}>
          DAY <Text style={styles.dayRight}>2</Text>
        </Text>
        <Text style={styles.calorie}>1852/2014 calorie</Text>
        <DietCard type="Breakfast" totalCalorie="516" />
        <DietCard type="Lunch" totalCalorie="915" />
        <DietCard type="Dinner" totalCalorie="1300" />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  day: {
    fontSize: 24,
    fontFamily: "Jost-Bold",
    marginBottom: 10,
  },
  calorie: {
    fontSize: 18,
    fontFamily: "Jost-Bold",
  },
  dayRight: {
    color: "#3DCC85",
  },
});
