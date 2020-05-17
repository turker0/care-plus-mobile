import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Step1 from "./steps/step1";

const Setup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step1</Text>
      <Text style={styles.info}>
        Set up your physical informations to find the best diets for you.
      </Text>
      <View style={styles.stepWrapper}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Step1 />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Setup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "15%",
    padding: "5%",
  },
  title: {
    fontSize: 24,
    fontFamily: "Jost-Medium",
    letterSpacing: 1,
  },
  info: {
    fontSize: 14,
    fontFamily: "Jost-Regular",
    textAlign: "center",
    padding: "5%",
  },
  stepWrapper: {
    width: "80%",
  },
});
