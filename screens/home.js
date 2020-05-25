import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DietCard from "../components/food/dietcard";
import { ScrollView } from "react-native-gesture-handler";

const calcDay = (date, setDay) => {
  let current = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  let accDate = {
    year: date.slice(0, 4),
    month: date.slice(5, 7),
    day: date.slice(8, 10),
  };

  setDay(
    (current.year - accDate.year) * 365 +
      (current.month - accDate.month) * 30 +
      (current.day - accDate.day)
  );
};

const Home = ({ route }) => {
  const [day, setDay] = useState("");
  const { profile } = route.params;

  useEffect(() => {
    if (day === "") calcDay(profile.date, setDay);
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.day}>
          DAY <Text style={styles.dayRight}>{day}</Text>
        </Text>
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
  dayRight: {
    color: "#3DCC85",
  },
});
