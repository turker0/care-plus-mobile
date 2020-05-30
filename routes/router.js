import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Profile from "../screens/profile";
import Setup from "../screens/setup";
import HomeRoute from "../routes/home";
import Header from "../components/header";
import HeaderWBG from "../components/headerwithbg";
import { Image } from "react-native";

const profileStack = createStackNavigator();

const profileRoute = () => {
  return (
    <NavigationContainer>
      <profileStack.Navigator initialRouteName={Welcome}>
        <profileStack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <profileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerBackground: () => (
              <Image
                source={require("../assets/images/headerbg.jpg")}
                style={{ width: "100%", height: "100%", opacity: 0.8 }}
                resizeMode="cover"
              />
            ),
            title: "Create a new profile",
            headerTintColor: "#2ecc71",
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Jost-Bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        />
        <profileStack.Screen
          name="Setup"
          component={Setup}
          options={{
            headerBackground: () => (
              <Image
                source={require("../assets/images/headerbg.jpg")}
                style={{ width: "100%", height: "100%", opacity: 0.8 }}
                resizeMode="cover"
              />
            ),
            title: "Set up your profile",
            headerTintColor: "#2ecc71",
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Jost-Bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        />
        <profileStack.Screen
          name="Home"
          component={HomeRoute}
          options={{
            headerBackground: () => (
              <Image
                source={require("../assets/images/headerbg.jpg")}
                style={{ width: "100%", height: "100%", opacity: 0.8 }}
                resizeMode="cover"
              />
            ),
            title: "Care+",
            headerTintColor: "#2ecc71",
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "Jost-Bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        />
      </profileStack.Navigator>
    </NavigationContainer>
  );
};

export default profileRoute;
