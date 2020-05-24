import React, { useState } from "react";
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

const getDetails = (
  mail,
  setName,
  setBmr,
  setAge,
  setGender,
  setHeight,
  setWeight,
  setBmi,
  setDate
) => {
  fetch("http://192.168.1.6:3000/api/profiles/" + mail, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setName(resJson.name);
      setAge(resJson.age);
      setGender(resJson.gender);
      setHeight(resJson.height);
      setWeight(resJson.weight);
      setBmi(resJson.bmi);
      setBmr(resJson.bmr);
      setDate(resJson.date);
    })
    .catch((err) => console.log(err));
};

const Home = ({ route }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmr, setBmr] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const { mail } = route.params;

  getDetails(
    mail,
    setName,
    setBmr,
    setAge,
    setGender,
    setHeight,
    setWeight,
    setBmi,
    setDate
  );
  calcDay(date, setDay);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.day}>
          DAY <Text style={styles.dayRight}>{day}</Text>
        </Text>
        <Text style={styles.calorie}>{bmr} calorie</Text>
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
