import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

const DietMoadl = ({ selectedFilter, name }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={selectedFilter}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </Modal>
  );
};

export default DietMoadl;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    backgroundColor: "red",
  },
});
