import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Cortes() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.text}>Undercut</Text>
          <Image
            style={styles.image}
            source={require('../../assets/undercut1.png')}
            resizeMode='stretch'
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Top Knot</Text>
          <Image
            style={styles.image}
            source={require('../../assets/topKnot.png')}
            resizeMode='stretch'
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Degradê</Text>
          <Image
            style={styles.image}
            source={require('../../assets/degrade.png')}
            resizeMode='stretch'
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Razor Part</Text>
          <Image
            style={styles.image}
            source={require('../../assets/razorPart.png')}
            resizeMode='stretch'
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Pompadour</Text>
          <Image
            style={styles.image}
            source={require('../../assets/Pompadour.png')}
            resizeMode='stretch'
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Curto atrás e dos lados</Text>
          <Image
            style={styles.image}
            source={require('../../assets/Curto.png')}
            resizeMode='stretch'
          ></Image>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79350A',
  },
  content: {
    margin: 20,
  },
  image: {
    // width: 300,
    // height: 150,
    // marginLeft: 30,
    // marginTop: 30,
    backgroundColor: '#fff',
    // borderWidth: 2,
    // borderColor: "#eee",
    // borderRadius: 30,
    height: 180,
    width: 350,

    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    marginBottom: 10,
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#79350A',
  },
});
