import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Setup from "../components/setup";

const Home = () => {
  return (
    <View style={styles.container}>
      <Setup />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
