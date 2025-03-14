
import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, Settings } from "react-native";
import { styles, theme } from "../Authentication/AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout"; // Ensure you import your styles correctly
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface AppNavBarProps {
    navigation: HomeScreenNavigationProp;
}

const Tab = createBottomTabNavigator();

const AppNavBar = ({navigation}: AppNavBarProps) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.navBar}>
            {/* Home Icon */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="home" color="#FFA726" size={30} />
              <Text style={{ fontSize: 12, color: '#FFA726' }}>Home</Text>
            </TouchableOpacity>
      
            {/* Workout Icon */}
            <TouchableOpacity onPress={() => navigation.navigate('Workout')} style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="dumbbell" color="#FFA726" size={30} />
              <Text style={{ fontSize: 12, color: '#FFA726' }}>Workout</Text>
            </TouchableOpacity>
      
            {/* Nutrition Icon */}
            <TouchableOpacity onPress={() => navigation.navigate('Nutrition')} style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="food" color="#FFA726" size={30} />
              <Text style={{ fontSize: 12, color: '#FFA726' }}>Nutrition</Text>
            </TouchableOpacity>
          </View>
        
    );
};

export default AppNavBar;




// <View style={styles.container}>
        //     <Text style={styles.title}>Home Screen</Text>
        //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Workout")}>
        //         <Text style={styles.buttonText}>Go To Workout</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Nutrition")}>
        //         <Text style={styles.buttonText}>Go to Nutrition</Text>
        //     </TouchableOpacity>
        // </View> 




        // <Tab.Navigator
        //     screenOptions={{
        //         // tabBarStyle: styles.tabBar,
        //         tabBarActiveTintColor: '#FFA726',
        //         tabBarInactiveTintColor: '#999',
        //         headerShown: false,
        //     }}
        // >
        //     <Tab.Screen
        //         name="Home"
        //         component={HomeScreen}
        //         options={{
        //             tabBarLabel: 'Home',
        //             tabBarIcon: ({ color, size }) => (
        //                 <MaterialCommunityIcons name="home" color={color} size={size} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Workout"
        //         component={WorkoutScreen}
        //         options={{
        //             tabBarLabel: 'Workout',
        //             tabBarIcon: ({ color, size }) => (
        //                 <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Nutrition"
        //         component={NutritionScreen}
        //         options={{
        //             tabBarLabel: 'Nutrition',
        //             tabBarIcon: ({ color, size }) => (
        //                 <MaterialCommunityIcons name="food-apple" color={color} size={size} />
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Settings"
        //         component={SettingsScreen}
        //         options={{
        //             tabBarLabel: 'Settings',
        //             tabBarIcon: ({ color, size }) => (
        //                 <MaterialCommunityIcons name="cog" color={color} size={size} />
        //             ),
        //         }}
        //     />
        // </Tab.Navigator>