import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, TextInput } from "react-native";
import AppNavbar from "./AppNavbar/AppNavbar";
import { useUser } from "../Hooks/UserProvider";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";
import { AdvancedWorkoutPlan, BeginnerWorkoutPlan, IntermediateWorkoutPlan } from "@/app/Classes/WorkoutPlan";
import { styles } from "@/app/Components/Authentication/AuthenticationStyle";

interface HomeScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { user, isAuthenticated, setUser , setIsAuthenticated} = useUser();

    const updateWorkoutLevel = (level: string) => {
        if (user) {
            let newWorkoutPlan;

            switch (level) {
                case "Beginner":
                    newWorkoutPlan = new BeginnerWorkoutPlan([], new Map());
                    break;
                case "Intermediate":
                    newWorkoutPlan = new IntermediateWorkoutPlan([], new Map());
                    break;
                case "Advanced":
                    newWorkoutPlan = new AdvancedWorkoutPlan([], new Map());
                    break;
                default:
                    newWorkoutPlan = user.workoutPlan;
            }

            const updatedUser = Object.assign(
                Object.create(Object.getPrototypeOf(user)),
                user,
                { level, workoutPlan: newWorkoutPlan }
            );

            setUser(updatedUser);
        }
    };

    const updateWeight = (sweight: string) => {
        let weight = parseInt(sweight);
        if (user) {
            user.weight = weight;
            const updatedUser = Object.assign(Object.create(Object.getPrototypeOf(user)), user, { weight });
            setUser(updatedUser);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigation.navigate('App')
    }

    return (
        <View style={{ flex: 1 }}>
    <   View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        </View>
        <View style={{height: 30}}/>
        <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentContainer, {flexGrow: 1,}]}>
            <AppNavbar navigation={navigation} />
            {/* Welcome Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Welcome back, {user?.name || 'Guest'}!</Text>
                <Text style={styles.subtitle}>Your fitness journey continues!</Text>
            </View>

            {/* Progress Tracking Section */}
            <View style={styles.progressContainer}>
                <Text style={styles.sectionTitle}>Your Progress</Text>
                <View style={styles.progressCard}>
                    <Text style={styles.progressLabel}>Weight:</Text>
                    <Text style={styles.progressValue}>{user?.weight || 'N/A'} lbs</Text>
                </View>
                <View style={styles.progressCard}>
                    <Text style={styles.progressLabel}>Level:</Text>
                    <Text style={styles.progressValue}>{user?.level || 'N/A'}</Text>
                </View>
                <View style={styles.progressCard}>
                    <Text style={styles.progressLabel}>Height:</Text>
                    <Text style={styles.progressValue}>{user?.height || 'N/A'} inches</Text>
                </View>
            </View>

            {/* Update User Characteristics Button */}
            <TouchableOpacity
            style={styles.updateButton}
            // onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>Update Your Profile</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
};

export default HomeScreen;
