import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

import api from "../services/api";

export default function Search({ navigation }) {
  const categorie = navigation.getParam("categorie");
  const [searchParams, setSearchParams] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchParams(categorie);
  }, [categorie]);
  useEffect(() => {
    setTimeout(() => {
      loadCategories();
    }, 100);
  }, [searchParams]);

  async function loadCategories() {
    setSearchResult([]);
    const response = await api.get(`devsPerCategorie/${searchParams}`);
    console.log(response);
    setSearchResult(response.data);
  }

  return (
    <Container style={{ backgroundColor: "#E5E6F0" }}>
      <Header
        searchBar
        rounded
        style={{ backgroundColor: "#4d194a", height: 100 }}
      >
        <Item style={{ marginTop: 30, borderRadius: 20 }}>
          <Icon name="ios-search" />
          <Input
            onChangeText={setSearchParams}
            autoCapitalize="characters"
            placeholder="Digite o serviço.."
            value={searchParams}
          />
          <Button
            onPress={loadCategories}
            style={{
              backgroundColor: "#dd4814",
              height: 40,
              borderBottomRightRadius: 20
            }}
          >
            <Text>BUSCAR</Text>
          </Button>
        </Item>
      </Header>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={searchResult}
          keyExtractor={catego => searchResult._id}
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
    </Container>
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

Search.navigationOptions = {
  tabBarLabel: "Buscar",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome5 name="search" size={27} color={tintColor} />
  )
};
