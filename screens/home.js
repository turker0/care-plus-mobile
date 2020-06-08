import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import DietCard from "../components/food/dietcard";
import { ScrollView } from "react-native-gesture-handler";
import Stat from "../components/home/stat";
import { Feather } from "@expo/vector-icons";

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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.statTitle}>STATS</Text>
          <Text style={styles.statName}>
            These are your stats, {profile.name.split(" ")[0]}
          </Text>
          <View style={styles.stats}>
            <Stat
              title="Started Date"
              stat={
                profile.date.slice(8, 10) +
                " " +
                profile.date.slice(5, 7) +
                " " +
                profile.date.slice(0, 4)
              }
            />
            <Stat title="Total Day" stat={day} />
            <Stat title="Started BMI" stat={profile.bmi} />
            <Stat
              title="Target BMI"
              stat={(
                (profile.target / (profile.height * profile.height)) *
                10000
              ).toFixed(0)}
            />
            <Stat title="Started BMR" stat={profile.bmr} />
            <Stat
              title="Target BMR"
              stat={((profile.bmr / profile.weight) * profile.target).toFixed(
                0
              )}
            />
            <Stat
              title="Total Calorie Loss/Gain"
              stat={Math.abs(
                profile.bmr -
                  (profile.bmr / profile.weight) * profile.target * day
              ).toFixed(0)}
            />
            <Stat
              title="Total Weight Loss/Gain"
              stat={(
                Math.abs(
                  profile.bmr -
                    (profile.bmr / profile.weight) * profile.target * day
                ) / 7400
              ).toFixed(0)}
            />
          </View>
          <View style={styles.fdWrapper}>
            <Feather name="info" size={12} color="#424242" />
            <Text style={styles.statInfo}>
              numbers are based on your physical informations and target weight.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.95,
    alignItems: "center",
    marginTop: Dimensions.get("window").height / 20,
  },
  day: {
    fontSize: 24,
    fontFamily: "Jost-Bold",
    marginBottom: 10,
  },
  dayRight: {
    color: "#3DCC85",
  },
  stats: {
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  statTitle: {
    fontSize: 24,
    fontFamily: "Jost-Bold",
  },
  statName: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    margin: Dimensions.get("window").height / 50,
  },
  fdWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statInfo: {
    fontSize: 10,
    fontFamily: "Jost-Regular",
    marginLeft: 5,
    color: "#424242",
  },
});
