import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DietList from "../components/dietList";

let diets;

const getAllDiets = (isUpdated, setIsUpdated, setDiet1) => {
  if (!isUpdated) {
    fetch("http://192.168.1.6:3000/api/diets/get/All", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        diets = resJson;
        //resJson.forEach((element) => console.log(element.name));
        //console.log(resJson[0]);
        console.log(diets[0].breakfast);
        console.log(diets[1].breakfast);
        setDiet1(resJson[0].name);
      });
    setIsUpdated(true);
  }
};

const nameFilter = (diets) => {
  diets.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
};

const calorieFilter = (diets) => {
  diets.sort(function (a, b) {
    return a.calorie < b.calorie ? -1 : a.calorie > b.calorie ? 1 : 0;
  });
};

const Diet = () => {
  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [diet1, setDiet1] = useState(0);
  useEffect(() => {
    getAllDiets(isUpdated, setIsUpdated, setDiet1);
  });

  return (
    <ScrollView>
      <View style={styles.contaienr}>
        <Text style={styles.title}>Diets</Text>
        <Text style={styles.desc}>Search a diet that you want to go on.</Text>
        <View style={styles.filterWrapper}>
          <Ionicons
            name="ios-search"
            size={24}
            color="#3DCC85"
            style={styles.icon}
          />
          <TextInput
            style={styles.profileName}
            onChangeText={(text) => setFilter(text)}
            value={filter}
            keyboardType="default"
            maxLength={30}
            autoCapitalize="none"
            style={styles.filter}
          ></TextInput>
        </View>
        <View style={styles.tagWrapper}>
          <TouchableOpacity
            onPress={() => {
              setSelectedFilter(0);
              nameFilter(diets);
            }}
          >
            <Text style={selectedFilter === 0 ? styles.active : styles.passive}>
              name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedFilter(1);
              calorieFilter(diets);
            }}
          >
            <Text style={selectedFilter === 1 ? styles.active : styles.passive}>
              calorie
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={diets}
          list
          renderItem={({ item, index }) => (
            <DietList
              name={item.name}
              calorie={item.totalCalorie}
              breakfast={item.breakfast}
              lunch={item.lunch}
              dinner={item.dinner}
              calBreakfast={item.breakfastCalorie}
              calLunch={item.lunchCalorie}
              calDinner={item.dinnerCalorie}
            />
          )}
          listKey={(item2, index) => "D" + index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Diet;

const styles = StyleSheet.create({
  contaienr: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Jost-Medium",
    textAlign: "center",
    color: "#3DCC85",
  },
  desc: {
    fontSize: 14,
    fontFamily: "Jost-Regular",
    marginVertical: 5,
  },
  filterWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: 0,
    paddingLeft: 10,
    elevation: 6,
  },
  filter: {
    width: 242,
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingLeft: "10%",
    zIndex: 0,
    fontSize: 14,
    color: "#424242",
    fontFamily: "Jost-Regular",
    backgroundColor: "#fff",
    elevation: 5,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    letterSpacing: 1,
  },
  tagWrapper: {
    width: 240,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  active: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    color: "#3DCC85",
    letterSpacing: 0.5,
    borderBottomWidth: 3,
    borderColor: "#3DCC85",
    textAlign: "center",
    marginHorizontal: 10,
  },
  passive: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    color: "#424242",
    letterSpacing: 0.5,
    textAlign: "center",
    marginHorizontal: 10,
  },
});
