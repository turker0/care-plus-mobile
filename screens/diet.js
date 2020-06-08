import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DietList from "../components/dietList";
import Tag from "../components/diets/tag";

let tags = ["~1500", "~2000", "~2500", "~3000", "vegan", "All"];
let bgColors = [
  "#00a8ff",
  "#fbc531",
  "#9c88ff",
  "#e84118",
  "#4cd137",
  "#424242",
];

const getAllDiets = (setIsUpdated, setDiets) => {
  fetch("http://192.168.1.6:3000/api/diets/get/All", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setDiets(resJson);
    });
  setIsUpdated(true);
  console.log("Tamam");
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

const deneme = (tag, diets, setFiltDiets) => {
  setFiltDiets(
    diets.filter((diet) => {
      return diet.totalCalorie > 300;
    })
  );
};

const Diet = () => {
  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [diets, setDiets] = useState(0);
  const [filtDiets, setFiltDiets] = useState(0);

  useEffect(() => {
    if (!isUpdated) {
      getAllDiets(setIsUpdated, setDiets);
    } else console.log("Yok");
  });

  return (
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
      <View
        style={[
          styles.tagWrapper,
          { width: 240, marginBottom: 5, marginTop: 15 },
        ]}
      >
        <Tag
          tag={tags[0]}
          bgColor={bgColors[0]}
          onclick={() => deneme(200, diets, setFiltDiets)}
        />
        <Tag tag={tags[1]} bgColor={bgColors[1]} />
        <Tag tag={tags[2]} bgColor={bgColors[2]} />
      </View>
      <View style={[styles.tagWrapper, { width: 240, marginBottom: 10 }]}>
        <Tag tag={tags[3]} bgColor={bgColors[3]} />
        <Tag tag={tags[4]} bgColor={bgColors[4]} />
        <Tag tag={tags[5]} bgColor={bgColors[5]} />
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
      <View style={styles.dietsWrapper}>
        <FlatList
          data={diets}
          keyExtractor={(item, index) => "key" + index}
          showsVerticalScrollIndicator={false}
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
        />
      </View>
    </View>
  );
};

export default Diet;

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    paddingTop: "10%",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  dietsWrapper: {},
});
