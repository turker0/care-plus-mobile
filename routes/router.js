import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Profile from "../screens/profile";
import Setup from "../screens/setup";
import HomeRoute from "../routes/home";
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
        <profileStack.Screen name="Setup" component={Setup} />
        <profileStack.Screen
          name="Home"
          component={HomeRoute}
          options={({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title="Care+" />,
          })}
        />
      </profileStack.Navigator>
    </NavigationContainer>
  );
};

export default profileRoute;
