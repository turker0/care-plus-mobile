import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Diet from "./diet";

const DietModal = ({ click }) => {
  const [visible, setVisible] = useState(click);
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text style={{ backgroundColor: "red" }}>sa</Text>
        </TouchableOpacity>
        <Diet />
      </View>
    </Modal>
  );
};

export default DietModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
  },
});
