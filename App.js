import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, View } from "react-native";
import { AppLoading } from "expo";

import Routes from "./src/routes";

const getFonts = () => {
  return Font.loadAsync({
    roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  //   );
  // }

  return <Routes />;
}
