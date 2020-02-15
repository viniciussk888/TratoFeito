import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { FontAwesome5 } from "@expo/vector-icons";

import api from "../services/api";

export default function SpotlightSpotList({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  async function loadServiceProvider() {
    const response = await api.get("/devs");
    setCategorias(response.data);
  }
  useEffect(() => {
    loadServiceProvider();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categorias}
        horizontal
        keyExtractor={catego => categorias._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ServiceContact", {
                _id: item._id
              })
            }
          >
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: `${item.avatar_url}`
                }}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  borderWidth: 2,
                  borderColor: "#dd4814",
                  alignSelf: "center"
                }}
              />
              <View style={styles.TextItemName}>
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.servico}>{item.categorie}</Text>
                <Text style={styles.servico}>{item.techs}</Text>
                <View style={styles.TextValor}>
                  <Text
                    style={{
                      color: "#dd4814",
                      marginRight: 10,
                      fontWeight: "bold",
                      fontSize: 14
                    }}
                  >
                    R$ {item.value}
                  </Text>
                </View>
                <Text style={styles.bio}>{item.bio}</Text>
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
  list: {
    paddingHorizontal: 20
  },
  listItem: {
    backgroundColor: "#4d194a",
    width: 243,
    marginBottom: 5,
    marginRight: 5,
    height: "80%",
    borderRadius: 25,
    padding: 10
  },
  nome: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center"
  },
  servico: {
    color: "#fff",
    fontSize: 14,
    alignSelf: "center"
  },
  bio: {
    color: "#fff",
    fontSize: 12,
    alignSelf: "center"
  },
  TextItemName: {
    top: 5,
    paddingRight: 10
  },
  TextValor: {
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10
  }
});
