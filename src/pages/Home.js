import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Right,
  Body,
  View,
  Text,
  H3,
  Button
} from "native-base";
import CategorieSpotList from "../components/CategorieSpotList";
import SpotlightSpotList from "../components/SpotlightSpotList";
export default function Home({ navigation }) {
  return (
    <Container style={{ backgroundColor: "#E5E6F0" }}>
      <Header noLeft style={{ height: 100, backgroundColor: "#4d194a" }}>
        <Body>
          <Title style={{ top: 10 }}>Olá, Visitante</Title>
        </Body>
        <Right>
          <Button
            style={{ top: 10, backgroundColor: "#dd4814" }}
            rounded
            danger
          >
            <Text>Anunciar</Text>
          </Button>
        </Right>
      </Header>
      <View style={{ flex: 1, marginBottom: 0 }}>
        <H3 style={{ marginLeft: 25, marginTop: 20 }}>Categorias</H3>
        <CategorieSpotList navigation={navigation} />
        <H3 style={{ marginLeft: 25, marginTop: 20 }}>Destaques</H3>
        <SpotlightSpotList navigation={navigation} />
      </View>
    </Container>
  );
}
Home.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome5 name="home" size={27} color={tintColor} />
  )
};
