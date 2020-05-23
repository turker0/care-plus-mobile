import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../input";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Back from "./back";

const Register = (profile, navigation) => {
  let formBody = [];

  for (var key in profile) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(profile[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch("http://192.168.1.6:3000/api/profiles/register", {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.status == 200) {
        navigation.navigate("Home");
      } else {
        console.log("Wrong e-mail or password. Please try again");
      }
    })
    .then((resJson) => {})
    .catch((err) => console.log(err));
};

const Step3 = ({ navigation, setIndicate, target, setTarget, profile }) => {
  return (
    <View>
      <Input
        label="Target weight"
        value={target}
        placeholder="Target weigh (kg)   "
        setValue={setTarget}
        type="numeric"
        length={3}
      />
      <View style={styles.navigationWrapper}>
        <Back indicate={2} setIndicate={setIndicate} />
        <TouchableWithoutFeedback
          onPress={() => {
            if (target !== 0) {
              Register(profile, navigation);
            }
          }}
        >
          <View style={styles.completeWrapper}>
            <Text style={styles.completeText}>Complete</Text>
            <MaterialIcons name="navigate-next" size={20} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  completeWrapper: {
    width: "50%",
    marginLeft: "25%",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#3DCC85",
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 5,
  },
  navigationWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  completeText: {
    fontSize: 14,
    fontFamily: "Jost-Medium",
    color: "#fff",
    marginLeft: 5,
  },
});
