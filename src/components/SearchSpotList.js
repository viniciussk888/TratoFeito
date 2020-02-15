import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import api from "../services/api";

export default function SearchSpotList({ navigation, searchParams }) {
  const [categorias, setCategorias] = useState([]);

  async function loadCategories() {
    const response = await api.get(`devsPerCategorie/${searchParams}`);
    setCategorias(response.data);
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categorias}
        keyExtractor={catego => categorias._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Contract")}>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: item.avatar_url
                }}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  borderWidth: 2,
                  borderColor: "#dd4814"
                }}
              />

              <View style={styles.TextItem}>
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.servico}>{item.categorie}</Text>
                <Text style={styles.servico}>{item.techs}</Text>
                <View style={styles.TextValor}>
                  <Text
                    style={{
                      color: "#dd4814",
                      marginRight: 10,
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    R$ {item.value}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#fff"
  },
  list: {
    paddingHorizontal: 20
  },
  listItem: {
    backgroundColor: "#4d194a",
    width: "100%",
    marginBottom: 5,
    height: 100,
    borderRadius: 25,
    padding: 10
  },
  nome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  servico: {
    color: "#fff",
    fontSize: 14
  },
  TextItem: {
    bottom: 80,
    alignItems: "flex-start",
    paddingLeft: 80
  },
  TextValor: {
    alignItems: "flex-start",
    paddingLeft: 0,
    alignItems: "flex-start",
    alignSelf: "flex-start"
  }
});
