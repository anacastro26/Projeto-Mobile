import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Tipo de Navegação
import Home from "./src/Pages/Home";
import Cadastrar from "./src/screens/Cadastro";
import Lista from "./src/screens/Lista de Materiais";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastrar} />
          <Stack.Screen name="Lista de Materiais" component={Lista} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//App.js
//App.js
