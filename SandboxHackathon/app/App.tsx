import { Text, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./_layout"; // Assuming types are in a separate file
import { styles } from "./Components/Authentication/AuthenticationStyle"; // Assuming the styles are imported from a separate file

type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface AppScreenProps {
    navigation: AppScreenNavigationProp;
}

const AppScreen = ({ navigation }: AppScreenProps) => {

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    const handleGoToLogin = () => {
        navigation.navigate("Login"); // Navigate to Login screen
    };

    const handleGoToRegister = () => {
        navigation.navigate("Register"); // Navigate to Register screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Screen</Text>

            <TouchableOpacity style={styles.button} onPress={handleGoToHome}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
                <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleGoToRegister}>
                <Text style={styles.buttonText}>Go to Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AppScreen;
