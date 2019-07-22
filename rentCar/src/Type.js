import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class Type extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.select}>Select Your Choice</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("rent");
          }}
        >
          <Text style={styles.rentbutton}> Rent a Car </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("rentee");
          }}
        >
          <Text style={styles.renteeButton}> Rent your Car </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  select: {
    fontSize: 20,
    color: "white",
    fontFamily: "Arial"
  },
  rentbutton: {
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
    width: 200,
    height: 50,
    borderRadius: 25
  },
  renteeButton: {
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
    width: 200,
    height: 50,
    borderRadius: 25
  }
});
