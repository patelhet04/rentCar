import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./apps/images/images.jpg")}
        style={styles.images}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>Rent-A-Car</Text>
          <Text style={styles.instructions}>Don't Dream It, Drive It!</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text style={styles.buttonRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black",
  },
  images: {
    flex: 1
  },
  welcome: {
    fontSize: 45,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    color: "white"
  },
  buttonLogin: {
    fontFamily: "Copperplate",
    fontSize: 20,
    color: "white",
    // backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    borderWidth: 2.5,
    borderColor: "white",
    paddingTop: 15,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 450,
    width: 250,
    height: 50,
    borderRadius: 25
  },
  buttonRegister: {
    fontFamily: "Copperplate",
    color: "white",
    fontSize: 20,
    // backgroundColor: "rgba(0,0,0,0.6)",
    textAlign: "center",
    borderWidth: 2.5,
    borderColor: "white",
    paddingTop: 15,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 30,
    width: 250,
    height: 50,
    borderRadius: 25
  }
});
