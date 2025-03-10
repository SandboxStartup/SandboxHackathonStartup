import { Text, View, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { styles } from "@/app/Components/Authentication/AuthenticationStyle";
import {useUser} from "@/app/Hooks/UserProvider";

type NutritionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Nutrition">;

interface NutritionScreenProps {
    navigation: NutritionScreenNavigationProp;
}

export default function NutritionScreen({ navigation }: NutritionScreenProps) {

    const {setIsAuthenticated} = useUser();


    const handleGoToWorkout = () => {
        navigation.navigate("Workout"); // Navigate to Workout screen
    };

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigation.navigate("App")
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

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
