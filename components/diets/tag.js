import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Tag = ({ tag, bgColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableWithoutFeedback>
        <Text style={styles.tag}>{tag}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 1,
  },
  tag: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontFamily: "Jost-Bold",
  },
});
