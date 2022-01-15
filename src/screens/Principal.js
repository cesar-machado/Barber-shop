import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Principal({ navigation }) {
  const handleBarbeiros = () => {
    navigation.navigate('Barbeiros');
  };

  const handleCuts = () => {
    navigation.navigate('Cortes');
  };

  const handleSchedule = () => {
    navigation.navigate('Marcar');
  };

  const handlePrice = () => {
    navigation.navigate('Valores');
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode='cover'
      source={require('../../assets/salon11.png')}
    >
      <View style={styles.container}>
        <View style={styles.text}>
          <Text
            style={{
              margin: 10,
              color: '#fff',
              fontFamily: 'Roboto_700Bold',
              fontSize: 22,
            }}
          >
            Seja Bem Vindo ao app da Barber Shop
          </Text>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 20,
              color: '#fff',
              fontFamily: 'Roboto_400Regular',
              fontSize: 18,
            }}
          >
            Aqui Você pode ver os tipos de corte, marcar horário com os melhores
            Barbeiros do Brasil.
          </Text>
          <Text style={styles.text}>Clique no que você deseja:</Text>
          <View style={styles.img}>
            <TouchableOpacity style={{ margin: 15 }} onPress={handleBarbeiros}>
              <Image
                style={styles.image}
                source={require('../../assets/barbeiros.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 15, marginLeft: 40 }}
              onPress={handleCuts}
            >
              <Image
                style={styles.image}
                source={require('../../assets/cortes.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.img}>
            <TouchableOpacity style={{ margin: 15 }} onPress={handleSchedule}>
              <Image
                style={styles.image}
                source={require('../../assets/marcarH.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 15, marginLeft: 40 }}
              onPress={handlePrice}
            >
              <Image
                style={styles.image}
                source={require('../../assets/preco.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.comp}> Feito por Cmach Company </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    // backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    // marginTop: 20,
    flex: 2,
    // opacity: 0.6
  },
  comp: {
    marginTop: 50,
    // marginLeft: 110,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ddd',
    fontSize: 10,
  },
  bt: {
    borderWidth: 1,
    margin: 30,
    opacity: 0.8,
    borderRadius: 30,
    borderColor: '#545353',
    overflow: 'hidden',
  },
  bt1: {
    borderWidth: 1,
    // opacity: 0.8,
    borderColor: '#545353',
    backgroundColor: '#391803',
  },
  image: {
    width: 110,
    height: 155,
    marginTop: 10,
  },
  img: {
    flexDirection: 'row',
  },
  text1: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
  },
});
