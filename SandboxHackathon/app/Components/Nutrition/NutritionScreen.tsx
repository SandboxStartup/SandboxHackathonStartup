import { Text, View, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { styles } from "@/app/Components/Authentication/AuthenticationStyle";

type NutritionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Nutrition">;

interface NutritionScreenProps {
    navigation: NutritionScreenNavigationProp;
}

export default function NutritionScreen({ navigation }: NutritionScreenProps) {

    const handleGoToWorkout = () => {
        navigation.navigate("Workout"); // Navigate to Workout screen
    };

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nutrition Screen</Text>

            <TouchableOpacity style={styles.button} onPress={handleGoToWorkout}>
                <Text style={styles.buttonText}>Go to Workout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleGoToHome}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}
