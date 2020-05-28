import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import DietList from "../components/dietList";

const DATA = [
  {
    id: "3000 Kalorilik Ayibogan Dieti",
    title: "3000",
  },
  {
    id: "3000 Kalorilik Ayibogan Dieti",
    title: "3000",
  },
  {
    id: "3000 Kalorilik Ayibogan Dieti",
    title: "3000",
  },
];

const Diet = () => {
  const [filter, setFilter] = useState("");
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
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <DietList name={item.id} calorie={item.title} />
          )}
          keyExtractor={(item) => item.name}
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
});
