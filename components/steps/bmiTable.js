import React from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

const bmiTable = ({ visible, setVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <Text style={styles.caption}>BMI Table</Text>
          <View style={styles.tableWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Underweight</Text>
              <Text style={styles.title}>Normal weight</Text>
              <Text style={styles.title}>Overweight</Text>
              <Text style={styles.title}>Obesity</Text>
            </View>
            <View style={styles.descWrapper}>
              <Text style={styles.desc}>under 18.5</Text>
              <Text style={styles.desc}>18.5 - 24.9</Text>
              <Text style={styles.desc}>24 - 29.9</Text>
              <Text style={styles.desc}>over 30</Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.close}>Got it</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default bmiTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWrapper: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  caption: {
    fontSize: 16,
    fontFamily: "Jost-Regular",
    color: "#424242",
    letterSpacing: 1,
  },
  tableWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  titleWrapper: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "Jost-Medium",
    color: "#424242",
    borderBottomWidth: 0.2,
    borderBottomColor: "#3DCC85",
  },
  descWrapper: {
    marginHorizontal: 5,
  },
  desc: {
    fontSize: 14,
    fontFamily: "Jost-Bold",
    color: "#3DCC85",
    borderBottomWidth: 0.2,
    borderBottomColor: "#424242",
  },
  close: {
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#3DCC85",
    fontFamily: "Jost-Bold",
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 5,
  },
});
