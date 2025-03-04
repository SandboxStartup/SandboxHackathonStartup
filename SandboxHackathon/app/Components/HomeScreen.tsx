import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const router = useRouter(); // ✅ Use expo-router's navigation

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 20 }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title="Increment Count" onPress={() => setCount(count + 1)} />
        <Button title="Decrement Count" onPress={() => setCount(count - 1)} />
        <Button title="Go to Workout" onPress={() => router.push("/Components/Workout/WorkoutScreen")} />
        <Button title="Go to Nutrition" onPress={() => router.push("/Components/Nutrition/Nutrition")} />
        <Text style={{ marginTop: 10 }}>Count: {count}</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
