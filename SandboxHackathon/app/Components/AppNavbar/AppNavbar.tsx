
import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { styles, theme } from "../Authentication/AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout"; // Ensure you import your styles correctly

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const AppNavBar = ({navigation}: HomeScreenProps) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Workout")}>
                <Text style={styles.buttonText}>Go To Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Nutrition")}>
                <Text style={styles.buttonText}>Go to Nutrition</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AppNavBar;
