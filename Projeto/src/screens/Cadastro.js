//AddItem.js
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { addItem } from "../services/ItemService";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text,
    });
  }
  handleSubmit() {
    addItem(this.state.name);
  }
  handleDelete() {
    deleteItem(this.state.name);
  }
  render() {
    return (
      <View style={styles.main}>
        <Image source={require("../Imagens/logo.png")} style={imag.image}></Image>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableOpacity style={styles.button} underlayColor="white" onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
  },
  title: {
    marginBottom: 90,
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
    borderRadius: 10,
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#111",
    alignSelf: "center",
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
const imag = StyleSheet.create({
  image: {
    top: -100,
    width: "96%",
    height: 90,
    marginBottom: 30,
  },
});
const Texto = StyleSheet.create({
  Text: {
    fontSize: 18,
    color: "#111",
  },
});
