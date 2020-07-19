import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const AppStack = createStackNavigator();

import Header from './screens/Header'
import Principal from "./screens/Principal";
import Barbeiros from "./screens/Barbeiros";
import Cortes  from "./screens/Cortes";
import Marcar from "./screens/Marcar";
import Valores from "./screens/Valores";

export default function Routes() {

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#391803" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            // fontWeight: 'bold',
            fontFamily: 'roboto-bold',
            fontSize: 27,
          },
          
        }}
      >
        <AppStack.Screen
          name="Principal"
          component={Principal}
          options={{
            headerTitle: 'Barber Shop'
          }}
          
        />
        <AppStack.Screen
          name="Barbeiros"
          component={Barbeiros}
          options={{
            headerTitle: "Barbeiros",
            // headerStyle: {}
          }}
          
        />
         <AppStack.Screen
          name="Cortes"
          component={Cortes}
          options={{
            headerTitle: "Cortes",
            // headerStyle: {}
          }}
          
        />
         <AppStack.Screen
          name="Marcar"
          component={Marcar}
          options={{
            headerTitle: "Marcar Horário",
            // headerStyle: {}
          }}
          style={{ fontSize: 200}}
        />
         <AppStack.Screen
          name="Valores"
          component={Valores}
          options={{
            headerTitle: "Valores",
            // headerStyle: {}
          }}
          style={{ fontSize: 200}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
