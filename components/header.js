import React from "react";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

const Header = ({ navigation, title }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.iconWrapper}
    >
      <Ionicons name="md-menu" size={32} color="#fff" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
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
