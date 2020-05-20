import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DietDay from "../components/food/dietday";

const Diet = () => {
  return (
    <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dayWrapper}>
          <Text style={styles.day}>Sunday</Text>
          <Text style={styles.calorie}>2014 calorie</Text>
          <DietDay type="Breakfast" totalCalorie="516" />
          <DietDay type="Lunch" totalCalorie="915" />
          <DietDay type="Dinner" totalCalorie="1300" />
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dayWrapper}>
          <Text style={styles.day}>Monday</Text>
          <Text style={styles.calorie}>1111 calorie</Text>
          <DietDay type="Breakfast" totalCalorie="516" />
          <DietDay type="Lunch" totalCalorie="915" />
          <DietDay type="Dinner" totalCalorie="1300" />
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dayWrapper}>
          <Text style={styles.day}>Tuesday</Text>
          <Text style={styles.calorie}>3232 calorie</Text>
          <DietDay type="Breakfast" totalCalorie="516" />
          <DietDay type="Lunch" totalCalorie="915" />
          <DietDay type="Dinner" totalCalorie="1300" />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Diet;

const styles = StyleSheet.create({
  dayWrapper: {
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
