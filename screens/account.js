import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomText from "../components/customText";

const Account = ({ route }) => {
  const { profile } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {profile.gender === "m" ? (
          <Image
            source={require("../assets/images/male.jpg")}
            style={{ width: 80, height: 80 }}
          />
        ) : (
          <Image
            source={require("../assets/images/female.jpg")}
            style={{ width: 80, height: 80 }}
          />
        )}
      </View>
      <CustomText label="username" text={profile.name} size={200} />
      <CustomText label="mail" text={profile.mail} size={200} />
      <View style={styles.fdWrapper}>
        <CustomText label="age" text={profile.age} size={95} />
        <CustomText label="target" text={profile.target} size={95} />
      </View>
      <View style={styles.fdWrapper}>
        <CustomText label="height" text={profile.height} size={95} />
        <CustomText label="weight" text={profile.weight} size={95} />
      </View>
      <View style={styles.fdWrapper}>
        <CustomText label="bmi" text={profile.bmi} size={95} />
        <CustomText label="bmr" text={profile.bmr} size={95} />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "red",

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  fdWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
