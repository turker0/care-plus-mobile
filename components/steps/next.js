import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Next = ({ result, indicate, setIndicate }) => {
  return (
    <View>
      {result ? (
        <TouchableWithoutFeedback onPress={() => setIndicate(indicate)}>
          <View style={styles.nextWrapper}>
            <Text style={styles.next}>next</Text>
            <MaterialIcons name="navigate-next" size={24} color="#3DCC85" />
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

export default Next;

const styles = StyleSheet.create({
  nextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  next: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    textAlign: "right",
    textAlignVertical: "center",
    color: "#3DCC85",
  },
});
