import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import api from "../services/api";

export default function CategorieSpotList({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  async function loadCategories() {
    const response = await api.get("/categorie");
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
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchCategorieResult", {
                categorie: item.name
              })
            }
          >
            <View style={styles.listItem}>
              <FontAwesome5 name={item.nameIcon} size={40} color="#fff" />
              <Text style={styles.nomeCategoria}>{item.name}</Text>
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
  list: {
    paddingHorizontal: 20
  },
  listItem: {
    marginRight: 5,
    backgroundColor: "#4d194a",
    width: 100,
    height: 100,
    borderRadius: 25,
    padding: 10,
    alignItems: "center"
  },
  nomeCategoria: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12
  }
});
