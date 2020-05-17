import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", margin: 55 }}>
        <Text style={styles.titleLeft}>Care,</Text>
        <Text style={styles.titleRight}>Plus</Text>
      </View>
      <TouchableWithoutFeedback
        style={styles.profileWrapper}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <AntDesign name="adduser" size={20} color="#3DCC85" />
        <Text style={styles.profile}>create a new profile</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleLeft: {
    fontSize: 40,
    fontFamily: "Jost-Regular",
    color: "#424242",
    letterSpacing: 3,
  },
  titleRight: {
    fontSize: 40,
    marginLeft: 8,
    fontFamily: "Jost-Bold",
    color: "#307351",
    letterSpacing: 3,
  },
  profileWrapper: {
    backgroundColor: "#fff",
    margin: 30,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
  },
  profile: {
    fontSize: 14,
    color: "#3DCC85",
    fontFamily: "Jost-Bold",
    paddingLeft: 5,
  },
});
