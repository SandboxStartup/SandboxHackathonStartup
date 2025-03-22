import React from "react";
import { Text, View, TouchableOpacity, Image, StatusBar } from "react-native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./_layout"; // Assuming types are in a separate file
import { styles } from "./Components/Authentication/AuthenticationStyle"; // Assuming the styles are imported from a separate file
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./Components/HomeScreen";
import WorkoutScreen from "./Components/Workout/WorkoutScreen";
import NutritionScreen from "./Components/Nutrition/NutritionScreen";
import LoginScreen from "./Components/Authentication/LoginScreen";
import RegisterScreen from "./Components/Authentication/RegisterScreen";
import {LinearGradient} from "expo-linear-gradient";
// import App from "./Components/";
// import SettingsScreen from "./Components/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type AppScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface AppScreenProps {
    navigation: AppScreenNavigationProp;

}

const AppScreen = ({ navigation }: AppScreenProps) => {

    const handleGoToLogin = () => {
        navigation.navigate("Login"); // Navigate to Login screen
    };

    const handleGoToRegister = () => {
        navigation.navigate("Register"); // Navigate to Register screen
    };

    return (
        <View style={styles.container}>
            <View>
                    <Image source={require('../images/weightlifterCoverPhoto.png')} style={styles.image} resizeMode="contain"/>
                    {/* <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-nctih&psig=AOvVaw21mPdVmNT-JT-M-dQCG8Zq&ust=1742017293022000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKje1KruiIwDFQAAAAAdAAAAABAJ'}} style={styles.image} resizeMode="contain"/> */}
            </View>

            <View>
                <Text style={styles.title}>Welcome to Intelifit</Text>
                <Text style={styles.subtitle}>Your personal fitness assistant</Text>
<<<<<<< HEAD
=======

>>>>>>> a70f25834ba238bd85495e0b5ab3d1608f7422fd
                <TouchableOpacity style={styles.appButton} onPress={handleGoToRegister}>
                    <Text style={styles.appButtonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appButton} onPress={handleGoToLogin}>
                    <Text style={styles.appButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
};
export default AppScreen; 
