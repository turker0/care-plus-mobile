import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

const HeaderWithBG = ({ title }) => {
  return (
    <ImageBackground
      source={require("../assets/images/headerbg.jpg")}
      style={styles.bg}
    >
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

export default HeaderWithBG;

const styles = StyleSheet.create({
  bg: {
    width: "105%",
    height: "116%",
    marginLeft: "-5%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Jost-Bold",
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
