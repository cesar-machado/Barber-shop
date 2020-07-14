import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Principal from "./screens/Principal";
import Barbeiros from "./screens/Barbeiros";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#391803" },
          headerTintColor: "#fff",
        }}
      >
        <AppStack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: "Barber Shop",
          }}
        />
        <AppStack.Screen
          name="Barbeiros"
          component={Barbeiros}
          options={{
            headerStyle: { backgroundColor: "#391803" },
            headerTintColor: "#fff",
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
