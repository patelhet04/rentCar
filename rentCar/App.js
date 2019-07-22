import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// import LoginScreen from './src/components/LoginScreen';
// import SignupScreen from './src/components/SignupScreen';
import Home from "./src//Home";
import LoginScreen from "./src/LoginScreen";
import Register from "./src/Register";
import Type from "./src/Type";
import rent from "./src/rent";
import rentee from "./src/rentee";
import hatch from "./src/hatch";
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: Register
    },
    Type: {
      screen: Type
    },
    rent: {
      screen: rent
    },
    rentee: {
      screen: rentee
    },
    hatch: {
      screen: hatch
    }
  },
  {
    initialRouteName: "Home"
    /* For styling header
      navigationOptions: {
          headerStyle: {
          backgroundColor: '#f4511e',
          },
          headerTitleStyle: {
          fontWeight: 'bold',
          },
      }
      */
  }
);
const App = createAppContainer(RootStack);
export default App;
