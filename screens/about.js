import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const About = () => {
  let contact = " support@care.plus ";
  let dev = "Click here to support devs.";

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: "20%" }}>
        <Text style={styles.text}>Contact us via</Text>
        <Text
          style={[styles.text, { color: "#3DCC85", fontFamily: "Jost-Bold" }]}
        >
          support@care.plus
        </Text>
        <Text style={[styles.text, { marginBottom: 50 }]}>
          for bug & error reports. You can also contact us in order to get
          information or help
        </Text>
      </View>
      <View style={styles.fdWrapper}>
        <Text style={styles.text}>Click </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/oguzturker8")}
        >
          <Text
            style={[
              styles.text,
              {
                fontFamily: "Jost-Bold",
                color: "#3DCC85",
                marginHorizontal: 5,
              },
            ]}
          >
            here
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>to support devs.</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Jost-Regular",
    textAlign: "center",
  },
  fdWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
