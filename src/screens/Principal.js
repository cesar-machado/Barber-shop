import React from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

export default function Principal({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Barbeiros");
  };

  return (
    <ImageBackground  style={ styles.imgBackground } 
        resizeMode='cover' 
        source={require('../../assets/barber.png')}>
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ margin: 10, color: '#fff' }}>Seja Bem Vindo ao app da Barber Shop</Text>
        <Text style={{ margin: 10, color: '#fff' }}>
          Aqui Você pode ver os tipos de corte, marcar horário com os melhores
          Barbeiros do brasil
        </Text>
        <Text style={{ margin: 10, color: '#fff' }}>Clique no que você deseja:</Text>
        <View style={{ margin: 30 }}>
          <Button
            title="Ver nossos Barbeiros"
            onPress={pressHandler}
            color="#000"
          />
        </View>
        <View style={{ margin: 30 }}>
          <Button title="Tipos de Corte" color="#ddd"  transparent='true'/>
        </View>
        <View style={{ margin: 30,  backgroundColor: "transparent" }}>
          <Button title="Marcar Horário" color="#391803" transparent='true' />
          {/* <Button title="Barbeiros" onPress={pressHandler} /> */}
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#ddd",
    alignItems: "flex-start",
    // justifyContent: "",
    // marginLeft: 15
  },
  text: {
    // backgroundColor: "#000",
    margin: 10,
  },
  image: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    // marginTop: 20,
    flex: 2,
    
  }
});
