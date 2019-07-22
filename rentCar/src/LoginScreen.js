import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default class Login extends Component {
  state = { email: "", password: "", errorMessage: null };
  // }
  // validate = text => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(text) === false) {
  //     // console.warn("Email is Not Correct");
  //     this.setState({ validated: false });
  //     return false;
  //   } else {
  //     this.setState({ validate: true });
  //     // console.warn("Email is Correct");
  //   }
  // };

  render() {
    return (
      <ImageBackground source={require("./src/apps/images")}>
        {/* <Card style={styles.card}> */}
        <View style={styles.container}>
          <Text style={styles.head}>Welcome</Text>
          <Text style={styles.subhead}>Login to Continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Username or Email Id"

            // value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
          />
          <Button
            style={styles.buttonLogin}
            title="Login"
            onPress={this.handleLogin}
          />
          <Button
            style={styles.buttonLogin}
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </View>
        //{" "}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center"
  },
  head: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    marginBottom: 40
  },
  subhead: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  input: {
    fontSize: 16,
    height: 40,
    marginLeft: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "black",
    borderRadius: 20,
    width: 350,
    paddingHorizontal: 16
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
    marginTop: 60,
    marginLeft: 90,
    width: 200,
    height: 50,
    borderRadius: 25
  }
});
