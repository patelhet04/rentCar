import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { black } from "ansi-colors";
export default class Register extends Component {
  // validate = text => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //     this.setState({ email: text });
  //     return false;
  //   } else {
  //     this.setState({ email: text });
  //     console.log("Email is Correct");
  //   }
  // };

  render() {
    return (
      // <ImageBackground source={require("./src/apps/images")}>
      <View style={styles.container}>
        <Text style={styles.head}>Register Yourself</Text>
        <TextInput style={styles.input} placeholder="FullName" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="UserName" />
        <TextInput
          style={styles.input}
          placeholder="Email Id"

          // onChangeText={text => this.validate(text)}
          // value={this.state.email}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
        />
        <Button
          style={styles.buttonRegister}
          title="Sign Up"
          onPress={this.handleSignUp}
        />
        <Button
          style={styles.buttonRegister}
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
      // </ImageBackground>
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
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30
  },
  input: {
    fontSize: 15,
    height: 40,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "black",
    borderRadius: 15,
    width: 350,
    paddingHorizontal: 16,
    marginTop: 10
  },
  buttonRegister: {
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
    marginTop: 50,
    marginLeft: 100,
    width: 200,
    height: 50,
    borderRadius: 25
  }
});
