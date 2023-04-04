import React from "react";

import MainScreen from "./screens/vMainScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Главная", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
