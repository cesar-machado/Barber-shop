import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Barbeiros({ navigation }) {
    const handlerCuts = () => {
        navigation.navigate("Cortes");
      };

      const handlerHours = () => {
        navigation.navigate("Marcar");
      };

  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={require("../../assets/img.jpg")}
    >
      <View style={styles.container}>
        <Text
          style={{ fontFamily: "roboto-bold", fontSize: 25, color: "#fff" }}
        >
          Esses são nossos Barbeiros
        </Text>
      
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../assets/pessoa.jpg")}
        ></Image>
        <Text style={styles.barbeiros}>João</Text>
        <Text style={styles.barbeiros}>Quer Marcar Horário com ele?</Text>
        <TouchableOpacity onPress={handlerCuts}>
            <Text style={styles.barbeiros}>Clique aqui e veja um Corte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlerHours}>
            <Text style={styles.barbeiros}>Se já sabe o corte Clique aqui para um horário com João. </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    // marginTop: 20,
    flex: 2,
    opacity: 1,
    backgroundColor: '#391803'
  },
  barbeiros: {
    fontFamily: "roboto",
    fontSize: 20,
    color: "#fff",
    marginLeft: 45,
  },
  image: {
    width: 300,
    height: 150,
    marginLeft: 30,
    marginTop: 30,
  },
  content: {
    //  flexDirection: 'row'
  },
});
