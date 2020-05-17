import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

const Header = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.iconWrapper}
    >
      <Ionicons name="md-menu" size={32} color="#fff" style={styles.icon} />
      <Text style={styles.title}>Care+</Text>
    </TouchableWithoutFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    position: "relative",
  },
  icon: {
    position: "absolute",
  },
  title: {
    fontFamily: "Jost-Bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});
