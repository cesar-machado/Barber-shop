import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'


export default function Barbeiros() {
    return (
        <ImageBackground  style={ styles.imgBackground } 
        resizeMode='cover' 
        source={require('../../assets/img.jpg')}>
        <View style={styles.container}>
            <Text>Barbeiros</Text> 
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: "#122365",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   // paddingTop: 100,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        // marginTop: 20,
        flex: 2,
        opacity: 1

},
})

