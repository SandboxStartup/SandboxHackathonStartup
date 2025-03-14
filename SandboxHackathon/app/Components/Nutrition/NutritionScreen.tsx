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

    const {setIsAuthenticated, user} = useUser();


    const handleGoToWorkout = () => {
        navigation.navigate("Workout"); // Navigate to Workout screen
    };

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    const handleLogout = async () => {
        try {
            const logoutResponse = await fetch('http://localhost:3000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: user?.name }), // Send as an object
            });

            if (!logoutResponse.ok) {
                alert("Failed to logout");
                return;
            }

            setIsAuthenticated(false);
            navigation.navigate("App");

        } catch (error) {
            console.error("Logout error:", error);
            alert("An error occurred while logging out.");
        }
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
