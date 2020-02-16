import React, { useState, useEffect } from "react";
import { Container, Header, Body, View, Icon, Title, Fab } from "native-base";
import { Text, FlatList, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../services/api";
export default function SearchCategorieResult({ navigation }) {
  const categorie = navigation.getParam("categorie");
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`devsPerCategorie/${categorie}`);
      setResultData(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Header noLeft style={{ backgroundColor: "#4d194a", height: 70 }}>
          <Body style={{ marginTop: 20 }}>
            <Title>Resultados</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={resultData}
            keyExtractor={catego => resultData._id}
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
      <View style={{ flex: 0 }}>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#4d194a" }}
          position="bottomRight"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon name="arrow-back" />
        </Fab>
      </View>
    </>
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
