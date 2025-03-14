import React, { useEffect } from "react";
import { View, Text, ScrollView, Button, TextInput } from "react-native";
import AppNavbar from "./AppNavbar/AppNavbar";
import { useUser } from "../Hooks/UserProvider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";
import { AdvancedWorkoutPlan, BeginnerWorkoutPlan, IntermediateWorkoutPlan } from "@/app/Classes/WorkoutPlan";

interface HomeScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { user, isAuthenticated, setUser } = useUser();

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

    useEffect(() => {
        if (!isAuthenticated || user === null) {
            navigation.navigate("App");
        }
    }, [isAuthenticated, user]);

    return (
        <ScrollView>
            <AppNavbar navigation={navigation} />
            <View>
                <Text>Welcome {user?.name}!</Text>
            </View>
            <View>
                <Text>User Details:</Text>
                <Text>Name: {user?.name}</Text>
                <Text>Age: {user?.age}</Text>
                <Text>Weight: {user?.weight} lbs</Text>
                <Text>Height: {user?.height} inches</Text>
                <Text>Level: {user?.level}</Text>
                <Button title="Change Workout Plan to Beginner" onPress={() => updateWorkoutLevel("Beginner")} />
                <Button title="Change Workout Plan to Intermediate" onPress={() => updateWorkoutLevel("Intermediate")} />
                <Button title="Change Workout Plan to Advanced" onPress={() => updateWorkoutLevel("Advanced")} />
                <Text>Change Weight:</Text>
                <TextInput placeholder="Enter Weight" keyboardType="default" onChangeText={(text) => updateWeight(text)} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
