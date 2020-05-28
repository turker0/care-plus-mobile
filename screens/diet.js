import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DietList from "../components/dietList";
import DietModal from "../components/diet/dietModal";

const DATA = [
  {
    name: "ABababa Kalorilik Ayibogan Dieti1",
    calorie: 3000,
  },
  {
    name: "3000 Kalorilik Ayibogan Dieti2",
    calorie: 30002,
  },
  {
    name: "Bebebel alorilik Ayibogan Dieti3",
    calorie: 30003,
  },
];

const nameFilter = (DATA) => {
  DATA.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
};

const calorieFilter = (DATA) => {
  DATA.sort(function (a, b) {
    return a.calorie < b.calorie ? -1 : a.calorie > b.calorie ? 1 : 0;
  });
};

const Diet = () => {
  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [name, setName] = useState("Ciguli");
  return (
    <ScrollView>
      <View style={styles.contaienr}>
        <Text style={styles.title}>Diets</Text>
        <Text style={styles.desc}>Search a diet that you want to go on.</Text>
        <DietModal
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          name={name}
        />
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
              nameFilter(DATA);
            }}
          >
            <Text style={selectedFilter === 0 ? styles.active : styles.passive}>
              name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedFilter(1);
              calorieFilter(DATA);
            }}
          >
            <Text style={selectedFilter === 1 ? styles.active : styles.passive}>
              calorie
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <DietList
              name={item.name}
              calorie={item.calorie}
              setSelectedFilter={setSelectedFilter}
              setName={setName}
            />
          )}
          keyExtractor={(item, index) => index}
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
