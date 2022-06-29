import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../config/db";

let itemsRef = db.ref("/items");

export default function ListItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();

      if (data !== null) {
        let items = [];

        Object.keys(data).map((key, index) => {
          items.push({ id: key, name: data[key].name });
        });

        setItems(items);
      } else {
        setItems([]);
      }
    });
  }, []);

  function deleteItem(itemId) {
    db.ref(`/items/${itemId}`).remove();
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require("../Imagens/logo.png")} style={imag.image}></Image>

        {items.length > 0 ? (
          items.map((item, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.itemtext}>{item.name}</Text>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => deleteItem(item.id)}>
                  <View>
                    <Text style={styles.textbutton}>Deletar</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={aviso.text}>Nenhuma matéria cadastrada!</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    width: "100%",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#DCDCDC",
  },
  box: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    paddingLeft: 20,
    marginBottom: 20,
  },
  itemtext: {
    fontSize: 24,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 80,
    height: 60,
  },
  textbutton: {
    color: "#FFFFFF",
  },
});

const imag = StyleSheet.create({
  image: {
    top: -12,
    width: "96%",
    height: 105,
    marginBottom: 80,
    justifyContent: "center",
  },
});

const aviso = StyleSheet.create({
  text: {
    backgroundColor: "red",
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "center",
  },
});
