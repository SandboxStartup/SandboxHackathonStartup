import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/Authentication/LoginScreen";
import RegisterScreen from "./Components/Authentication/RegisterScreen";
import App from "./App";
import WorkoutScreen from "./Components/Workout/WorkoutScreen";
import NutritionScreen from "./Components/Nutrition/NutritionScreen";  // The main app screen

export type RootStackParamList = {
  App: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Workout: undefined;
  Nutrition: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (

        <Stack.Navigator initialRouteName="App">
          <Stack.Screen name="App" component={App} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen}/>
          <Stack.Screen name="Nutrition" component={NutritionScreen}/>
        </Stack.Navigator>
  );
}
