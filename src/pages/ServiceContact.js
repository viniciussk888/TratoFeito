import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Linking } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Fab,
  View
} from "native-base";
import api from "../services/api";
export default function ServiceContact({ navigation }) {
  const _id = navigation.getParam("_id");
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [categorie, setCategorie] = useState();
  const [techs, setTechs] = useState();
  const [value, setValue] = useState();
  const [bio, setBio] = useState();
  const [whats, setWhats] = useState();

  useEffect(() => {
    async function loadDev() {
      const response = await api.get("/devs/" + _id);
      setImage(response.data.dev.avatar_url);
      setName(response.data.dev.name);
      setBio(response.data.dev.bio);
      setCategorie(response.data.dev.categorie);
      setValue(response.data.dev.value);
      setWhats(response.data.dev.whats);
      setTechs(response.data.dev.techs);
    }
    loadDev();
  }, []);

  return (
    <>
      <Container style={{ backgroundColor: "#E5E6F0" }}>
        <Header style={{ backgroundColor: "#4d194a" }}></Header>
        <Content style={{ margin: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <FontAwesome5 name="address-card" size={40} color="#dd4814" />
                <Body>
                  <Text style={{ color: "#4d194a", fontWeight: "bold" }}>
                    {techs}
                  </Text>
                  <Text note style={{ color: "#4d194a" }}>
                    {categorie}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: image
                }}
                style={{ height: 350, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <FontAwesome5 name="dollar-sign" size={25} color="#dd4814" />
                <Text style={{ color: "#dd4814", fontWeight: "bold" }}>
                  {value}
                </Text>
              </Left>
              <Body>
                <Text style={{ color: "#4d194a", fontWeight: "bold" }}>
                  {name}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{ color: "#4d194a", fontWeight: "bold" }}>
                {bio}
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body style={{ alignItems: "center" }}>
                <Button
                  style={{ backgroundColor: "#34A34F" }}
                  onPress={() => {
                    Linking.openURL(
                      `whatsapp://send?phone=55${whats}&text=Ola, me chamo ${name}!!%20Encontrei%20seus%20serviços%20no%20Aplicativo%20Tratofeito%20e%20fiquei%20bastante%20interessado(a),%20vamos%20conversar??`
                    );
                  }}
                >
                  <Icon name="logo-whatsapp" />
                  <Text>Chamar</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
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
