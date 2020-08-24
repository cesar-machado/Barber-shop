import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

export default function Barbeiros({ navigation }) {
  //   const [barbeiros, setBarbeiros]= useState({
  //   name:  'João' , img: require("../../assets/pessoa.jpg") ,
  //   name:  'Fábio' , img: require("../../assets/img.jpg")

  // })

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
      source={require("../../assets/salon3.jpg")}
    >
      <View style={styles.container}>
        <Text
          style={{ fontFamily: "roboto-bold", fontSize: 25, color: "#000" }}
        >
          Esses são nossos Barbeiros
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          // snapToInterval={300}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          // contentContainerStyle={{ paddingHorizontal: 35 }}
        >
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={require("../../assets/pessoa.jpg")}
            ></Image>
            <Text style={styles.textCard}>Fábio</Text>
            <TouchableOpacity onPress={handlerHours}>
              <Text style={styles.textHours}>
                Clique aqui Para Marcar um Horário.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={require("../../assets/img.jpg")}
            ></Image>
            <Text style={styles.textCard}>Carlos</Text>
            <TouchableOpacity onPress={handlerHours}>
              <Text style={styles.textHours}>
                Clique aqui Para Marcar um Horário.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={require("../../assets/barber.png")}
            ></Image>
            <Text style={styles.textCard}>César</Text>

            <TouchableOpacity onPress={handlerHours}>
              <Text style={styles.textHours}>
                Clique aqui Para Marcar um Horário.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    backgroundColor: "#391803",
  },
  barbeiros: {
    fontFamily: "roboto",
    fontSize: 20,
    color: "#fff",
    marginLeft: 45,
  },
  image: {
    // width: 300,
    // height: 150,
    // marginLeft: 30,
    // marginTop: 30,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#eee",
    height: 400,
    width: 300,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#000",
    shadowOffset: { width: 350, height: 200 },
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 30,
    marginVertical: 50,
    width: 300,
    height: 500,
    marginLeft: 65,
  },
  textCard: {
    fontFamily: "roboto-bold",
    fontSize: 25,
    color: "#fff",
    // marginLeft: 5,
    paddingLeft: 110,
    // borderWidth: 2,
    // borderRadius: 5,
    // borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHours: {
    fontFamily: "roboto",
    fontSize: 20,
    color: "#fff",
    // marginLeft: 5,
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 20,
    // borderColor: "#fff",
    marginTop: 15,
  },
});
