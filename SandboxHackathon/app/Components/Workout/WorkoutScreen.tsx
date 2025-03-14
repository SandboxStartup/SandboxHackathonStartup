import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { styles } from "@/app/Components/Authentication/AuthenticationStyle";

type WorkoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Workout">;

interface WorkoutScreenProps {
    navigation: WorkoutScreenNavigationProp;
}

export default function WorkoutScreen({ navigation }: WorkoutScreenProps) {

    const handleGoToFood = () => {
        navigation.navigate("Nutrition"); // Navigate to Nutrition screen
    };

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Screen</Text>

            <TouchableOpacity style={styles.button} onPress={handleGoToFood}>
                <Text style={styles.buttonText}>Go to Food</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleGoToHome}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}
