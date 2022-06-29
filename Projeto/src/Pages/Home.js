import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.tela01 = this.tela01.bind(this);
    this.tela02 = this.tela02.bind(this);
  }
  tela01() {
    this.props.navigation.navigate("Cadastro");
  }
  tela02() {
    this.props.navigation.navigate("Lista de Materiais");
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground style={styles.container} source={require("../Imagens/unifasipe.jpg")}>
            <Image source={require("../Imagens/logo.png")} style={imag.image}></Image>
            <Text style={texto.text}> Curso de Análise de Desenvolvimento Sistemas</Text>
            <TouchableOpacity onPress={this.tela01}>
              <View style={botao.botaozinho} title="Cadastrar">
                <Text style={texto01.text01}>Cadastrar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.tela02}>
              <View style={botao01.botaozinho01} title="Lista">
                <Text style={texto01.text01}>Lista de Matérias</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
const imag = StyleSheet.create({
  image: {
    top: -200,
    width: "80%",
    height: 90,
    marginBottom: 100,
  },
});
const botao = StyleSheet.create({
  botaozinho: {
    display: "flex",
    backgroundColor: "#fc5c65",
    width: 250,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
const botao01 = StyleSheet.create({
  botaozinho01: {
    display: "flex",
    backgroundColor: "#4ECDC4",
    width: 250,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
const texto = StyleSheet.create({
  text: {
    top: -280,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
});

const texto01 = StyleSheet.create({
  text01: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
});
