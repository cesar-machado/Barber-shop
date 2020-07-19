import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
    const openMenu = () => {
        // navigation.openDrawer()
    }
  return (
    
    <View style={styles.header}>
        {/* <MaterialIcons  name='menu' size={28} onPress={openMenu} style={styles.icon}/> */}
      <View>
        <Text style={styles.headerText}>Barber Shop</Text>
      </View>
  
    </View>
    
  );
}

const styles = StyleSheet.create({
    header: {
        // width: '100%',
        // height: '100%',
        // flexDirection: 'row',
        
        // alignItems: 'center',
        // justifyContent: 'center',
        
    },
    headerText: {
        color: '#fff',
        fontFamily: "roboto-bold",
        fontSize: 30,
        marginLeft: 95,

    },
    icon: {
        color: '#fff'
    }

})
