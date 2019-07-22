import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-elements";
import DatePicker from "react-native-datepicker";

export default class rent extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: " ",
  //     password: " "
  //   };
  // }
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
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false
    };
    this.state = { date: "15-05-2018" };
    this.state = { loc: "" };
  }
  handler(arg) {
    this.setState({
      loc: arg
    });
    return;
  }
  render() {
    return (
      // <ImageBackground source={require("./src/apps/images")}>
      <View style={styles.container}>
        <Text style={styles.head}>Enter your requirements</Text>
        <TextInput style={styles.input} placeholder="FullName" />
        <TextInput
          style={styles.input}
          placeholder="Email Id"
          // onChangeText={text => this.validate(text)}
          // value={this.state.email}
        />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Address" />
        {/* <Maps handler={this.handler.bind(this)} /> */}
        <Text style={styles.dateText}>Date:</Text>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 30,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 70,
              backgroundColor: "white",
              borderRadius: 25
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <Text style={styles.carType}>Car Type:</Text>
        <CheckBox
          title="SUV"
          checked={this.state.checked1}
          onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />
        <CheckBox
          title="Sedan"
          checked={this.state.checked2}
          onPress={() => this.setState({ checked2: !this.state.checked2 })}
        />
        <CheckBox
          title="HatchBack"
          checked={this.state.checked3}
          onPress={() => this.setState({ checked3: !this.state.checked3 })}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("");
          }}
        >
          <Text style={styles.buttonRent}> Rent </Text>
        </TouchableOpacity>
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
  dateText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "left",
    margin: 10,
    marginLeft: 20
  },
  head: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "Arial"
  },
  input: {
    fontSize: 15,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "black",
    borderRadius: 15,
    width: 350,
    paddingHorizontal: 16
  },
  buttonRent: {
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
    marginTop: 25,
    marginLeft: 85,
    width: 200,
    height: 50,
    borderRadius: 25
  },
  carType: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "left",
    margin: 20,
    marginLeft: 20
  }
  //   check: {
  //     borderRadius:
  //   }
});
