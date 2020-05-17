import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Profile from "../screens/profile";
import Home from "../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Diet from "../screens/diet";
import BMI from "../screens/bmi";
import Foods from "../screens/foods";
import About from "../screens/about";
import Header from "../components/header";

const profileStack = createStackNavigator();

const profileRoute = () => {
  return (
    <NavigationContainer>
      <profileStack.Navigator
        initialRouteName={Welcome}
        screenOptions={{
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#3DCC85",
            elevation: 5,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "Jost-Bold",
            letterSpacing: 1,
            textAlign: "center",
            alignSelf: "center",
          },
        }}
      >
        <profileStack.Screen name="Welcome" component={Welcome} />
        <profileStack.Screen name="Profile" component={Profile} />
        <profileStack.Screen
          name="contentRoute"
          component={contentRoute}
          options={({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} />,
          })}
        />
      </profileStack.Navigator>
    </NavigationContainer>
  );
};

const contentStack = createDrawerNavigator();

const contentRoute = ({ navigation }) => {
  return (
    <contentStack.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: "#fff",
        elevation: 5,
        width: 222,
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#3DCC85",
        inactiveTintColor: "#3DCC85",
      }}
      drawerType="front"
    >
      <contentStack.Screen name="Home" component={Home} />
      <contentStack.Screen name="Diet" component={Diet} />
      <contentStack.Screen name="BMI" component={BMI} />
      <contentStack.Screen name="Foods" component={Foods} />
      <contentStack.Screen name="About" component={About} />
    </contentStack.Navigator>
  );
};

export default profileRoute;
