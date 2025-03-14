import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { styles } from "@/app/Components/Authentication/AuthenticationStyle";
import AppNavBar from "../AppNavbar/AppNavbar";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

type WorkoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Workout">;

interface WorkoutScreenProps {
    // navigation: WorkoutScreenNavigationProp;
    navigation: BottomTabNavigationProp<RootStackParamList>;
}

export default function WorkoutScreen({ navigation }: WorkoutScreenProps) {

    const handleGoToFood = () => {
        navigation.navigate("Nutrition"); // Navigate to Nutrition screen
    };

    const handleGoToHome = () => {
        navigation.navigate("Home"); // Navigate to Home screen
    };

    return (
        <View>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <AppNavBar navigation={navigation} />
                <View>
                    
                </View>
            </ScrollView>
        </View>
    );
}
