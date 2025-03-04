import { useRouter } from "expo-router";
import { View, Button, Text } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Food" onPress={() => router.push("/Components/HomeScreen")} />
      <Button title="Go to Workout" onPress={() => router.push("/Components/Workout/WorkoutScreen")} />
      <Button title="Go to Nutrition" onPress={() => router.push("/Components/Nutrition/Nutrition")} />
    </View>
  );
}
