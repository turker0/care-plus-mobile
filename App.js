import React, { useEffect } from "react";
import { AppLoading } from "expo";
import Navigator from "./routes/router";
import { useFonts } from "@use-expo/font";
import { BackHandler, ToastAndroid } from "react-native";

export default () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  });

  let [fontsLoaded] = useFonts({
    "Jost-Bold": require("./assets/fonts/Jost-Bold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Jost-Medium": require("./assets/fonts/Jost-Medium.ttf"),
    "Jost-Light": require("./assets/fonts/Jost-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
};
