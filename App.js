import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, YellowBox } from "react-native";
import "react-native-gesture-handler";

import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
        <Routes />
      </>
    );
  }
}
