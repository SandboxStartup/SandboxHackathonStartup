import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const WorkoutScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Workout Screen</Text>
      <Button title="Go to Food" onPress={() => router.push("/Components/Nutrition/Nutrition")} />
      <Button title="Go to Home" onPress={() => router.push("/Components/HomeScreen")} />  
    </View>
  );
};

export default WorkoutScreen;
