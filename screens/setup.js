import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import BackButton from "../components/backButton";
import Indicator from "../components/indicator";
import Step1 from "../components/steps/step1";
import Step2 from "../components/steps/step2";
import Step3 from "../components/steps/step3";

const Setup = ({ navigation, route }) => {
  const { profileName, gender, mail, pass } = route.params;
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmr, setBmr] = useState("");
  const [target, setTarget] = useState(0);
  const [indicate, setIndicate] = useState(1);
  const instruction = [
    "Set up your physical informations to find the best diets for you.",
    "Body mass index is a measure of body fat based on height and weight that applies to adult men and women.",
    "Basal metabolic rate is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions.",
    "Last step, one more to go. Just set your target weight.",
  ];

  let profile = {
    name: profileName,
    mail: mail,
    password: pass,
    password2: pass,
    gender: gender,
    height: height,
    weight: weight,
    bmi: bmi,
    bmr: bmr,
    age: age,
    target: target,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <BackButton navigation={navigation} screen="Profile" />
            <Text style={styles.title}>Step {indicate}/3</Text>
            <Text style={styles.info}>{instruction[indicate]}</Text>
            <Indicator indicate={indicate} />
            <View style={styles.stepWrapper}>
              {indicate === 1 ? (
                <Step1
                  height={height}
                  weight={weight}
                  setHeight={setHeight}
                  setWeight={setWeight}
                  setIndicate={setIndicate}
                  bmi={bmi}
                  setBmi={setBmi}
                />
              ) : null}
              {indicate === 2 ? (
                <Step2
                  height={height}
                  weight={weight}
                  age={age}
                  setAge={setAge}
                  gender={gender}
                  bmr={bmr}
                  setBmr={setBmr}
                  setIndicate={setIndicate}
                />
              ) : null}
              {indicate === 3 ? (
                <Step3
                  setIndicate={setIndicate}
                  navigation={navigation}
                  setIndicate={setIndicate}
                  target={target}
                  setTarget={setTarget}
                  profile={profile}
                />
              ) : null}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
