import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const BackButton = ({ navigation, screen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screen);
        }}
      >
        <Ionicons name="ios-arrow-round-back" size={32} color="#3DCC85" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 5,
    left: 15,
  },
});
