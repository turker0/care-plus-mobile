import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Back = ({ result, indicate, setIndicate }) => {
  return (
    <View>
      {result ? (
        <TouchableWithoutFeedback onPress={() => setIndicate(indicate)}>
          <View style={styles.nextWrapper}>
            <MaterialIcons name="navigate-before" size={24} color="#3DCC85" />
            <Text style={styles.next}>back</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({
  nextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  next: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    textAlign: "left",
    textAlignVertical: "center",
    color: "#3DCC85",
  },
});
