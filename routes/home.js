import "react-native-gesture-handler";
import * as React from "react";
import Home from "../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Diet from "../screens/diet";
import Foods from "../screens/foods";
import About from "../screens/about";
import Account from "../screens/account";
import Login from "../screens/welcome";

const homeStack = createDrawerNavigator();

const homeRoute = ({ route }) => {
  let { profile } = route.params;
  return (
    <homeStack.Navigator
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
      <homeStack.Screen
        name="Home"
        component={Home}
        initialParams={{ profile: profile }}
      />
      <homeStack.Screen
        name="Diet"
        component={Diet}
        initialParams={{ profile: profile }}
      />
      <homeStack.Screen
        name="Foods"
        component={Foods}
        initialParams={{ profile: profile }}
      />
      <homeStack.Screen
        name="Account"
        component={Account}
        initialParams={{ profile: profile }}
      />
      <homeStack.Screen name="About" component={About} />
      <homeStack.Screen name="Logout" component={Login} />
    </homeStack.Navigator>
  );
};

export default homeRoute;
