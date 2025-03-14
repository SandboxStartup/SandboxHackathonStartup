
import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, Settings } from "react-native";
import { styles, theme } from "../Authentication/AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout"; // Ensure you import your styles correctly
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const Tab = createBottomTabNavigator();

const AppNavBar = ({navigation}: HomeScreenProps) => {
    const [count, setCount] = useState(0);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#FFA726',
                tabBarInactiveTintColor: '#999',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Workout"
                component={WorkoutScreen}
                options={{
                    tabBarLabel: 'Workout',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Nutrition"
                component={NutritionScreen}
                options={{
                    tabBarLabel: 'Nutrition',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="food-apple" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavBar;


{/* // <View style={styles.container}>
        //     <Text style={styles.title}>Home Screen</Text>
        //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Workout")}>
        //         <Text style={styles.buttonText}>Go To Workout</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Nutrition")}>
        //         <Text style={styles.buttonText}>Go to Nutrition</Text>
        //     </TouchableOpacity>
        // </View> */}