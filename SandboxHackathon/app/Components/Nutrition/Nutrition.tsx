import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const Nutrition = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Nutrition Screen</Text>
      <Button title="Go to Workout" onPress={() => router.push("/Workout/WorkoutScreen")} />
      <Button title="Go to Home" onPress={() => router.push("/Components/HomeScreen")} />
    </View>
  );
};

export default Nutrition;
