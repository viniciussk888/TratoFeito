import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Right,
  Fab,
  View
} from "native-base";
export default function ServiceContact({ navigation }) {
  return (
    <>
      <Container style={{ backgroundColor: "#E5E6F0" }}>
        <Header style={{ backgroundColor: "#4d194a" }}></Header>
        <Content style={{ margin: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://uploaddeimagens.com.br/images/002/257/965/original/Mark_Zuckerberg.jpg"
                  }}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://uploaddeimagens.com.br/images/002/257/965/original/Mark_Zuckerberg.jpg"
                }}
                style={{ height: 150, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Valor</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Nome</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem>
              <Text>bio</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body style={{ alignItems: "center" }}>
                <Button style={{ backgroundColor: "#34A34F" }}>
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
